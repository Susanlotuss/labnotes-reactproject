import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

import  Modal  from "../components/NotesModal";
import { getNotes } from "../Firebase/api";
import Note from "../components/NoteInfo";

import blueWool from "../img/prof11.jpg";
import myN from "../img/titleP.png";

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
    const myDocs = [];
    const doc = await getNotes();
    doc.forEach(doc => { myDocs.push({...doc.data(), id: doc.id}) });
    setNotes(myDocs)
}

useEffect(() => {
    getMyNotes();
}, []);

    return (
      <>
        <div>
          <img
            src={blueWool}
            alt="woolImage"
            style={{
              padding: 0,
              height: "100vh",
              position: "absolute",
              objectFit: "cover",
              zIndex: "-1",
            }}
          />
          <button
            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
            onClick={handleLogout}
          >
            LogOut 
          </button>
          <div>
            <img src={myN} alt="woolTitle" style={{alignSelf: "center"}}/>
            <Modal getMyNotes={getMyNotes} />
          </div>
        </div>
        {notes.map((note, index) => (
          // Only do this if items have no stable IDs. No usar índices para keys si el orden de los ítems puede cambiar.
          // <h1>{note.title}</h1>
          <Note
            key={index}
            title={note.title}
            description={note.description}
            user={note.user}
            id={note.id}
          />
        ))}
      </>
    );
    
  }

  

  export default Profile;
