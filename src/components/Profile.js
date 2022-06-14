import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

import { useNavigate } from "react-router-dom";

import  Modal  from "../components/notes";
import { getNotes } from "../firebase/api";
import Note from "./note";

//import blueWool from "../img/blue-wool2.jpg";

function Profile() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const getMyNotes = async (id) => {
    const docs = [];
    const doc = await getNotes(id);
    doc.forEach(doc => { docs.push(doc.data()) });
    setNotes(docs)
    console.log(docs)
    
}

useEffect(() => {
    getMyNotes();
}, []);

    return (
      <>
        <div>
          <Modal />
            <h1>MY NOTES</h1>
              <div>
                <button
                  className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                  onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
            {
              notes.map((note, index) => (
            //    <h1>{note.title}</h1>
                <Note key={index} title={note.title}/>
              ) 

              )
            }
      </>
    
    );
    
  }

  

  export default Profile;
