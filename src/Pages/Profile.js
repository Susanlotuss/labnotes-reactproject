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
              height: "100%",
              position: "absolute",
              objectFit: "cover",
              zIndex: "-1",
            }}
          />
          <footer
            className="bg-red-800
             text-1xl text-white text-center
             border-t-4 border-red-900
             fixed
             inset-x-0
             bottom-0
             p-4">
          <button
            className="bg-violet-600 hover:bg-slate-300 rounded py-2 px-4 text-white text-2xl font-serif"
            onClick={handleLogout}
          >
            LogOut 
          </button>
          </footer>
          <div>
            <img src={myN} alt="woolTitle" style={{marginLeft:"15rem", marginBottom:"6rem", paddingTop: "4rem"}}/>
            <Modal getMyNotes={getMyNotes} />
          </div>
        </div>
        {notes.map((note, index) => (
          // Only do this if items have no stable IDs. No usar índices para keys si el orden de los ítems puede cambiar.
          // <h1>{note.title}</h1>
          <Note 
            getMyNotes={getMyNotes}
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
