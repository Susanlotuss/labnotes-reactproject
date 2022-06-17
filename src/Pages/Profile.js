import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

import  Modal  from "../components/NotesModal";
import { getNotes } from "../Firebase/api";
import Note from "../components/NoteInfo";

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

  const getMyNotes = async () => {
    const docs = [];
    const doc = await getNotes();
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
          <Modal getMyNotes={getMyNotes} />
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
                <Note key={index} title={note.title} description={note.description} user={note.user} />
              ) 

              )
            }
      </>
    
    );
    
  }

  

  export default Profile;
