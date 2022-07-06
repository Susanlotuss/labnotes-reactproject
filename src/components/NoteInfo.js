import React from "react";
import { useState } from "react";
import { deleteNotes, updateNotes } from "../Firebase/api";

import woolNote from "../img/whiteNote.jpg";

 function Note ({ title, description, user, id, getMyNotes }) {
  
  const [showModal, setShowModal] = useState(false);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [oldData, setOldData] = useState("");
  const [noteInfo, setNoteInfo] = useState({
		//newTitle,
		//newDescription
	});


  const setShowModalEdit = (isBoolean) => {
    setShowModal(isBoolean);
    const newInfo = {...noteInfo}
    setNoteInfo(newInfo)
    setInputTitle(title)
    setInputDescription(description)
  }

  const postUpdatedNote = async(e)  => {
    e.preventDefault();
    
   if (!oldData) {
      await updateNotes(id, {description: inputDescription, title: inputTitle});
      getMyNotes();
    }
} 

  const deletingNotes = async(id) => {
    if (!window.confirm("are you sure you want to delete this link?")) {
      console.log("tryAgain");
    } else {
      console.log(id)
      await deleteNotes(id);
      getMyNotes();
    }
  }

  return (
    <div className="shadow-2xl rounded m-10 text-center grid grid-cols-1">
      
      <div className="bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
      <p>{user}</p>
      <p className="form-control px-2 py-2 text-3xl font-serif text-white">
        {title}
      </p>
      <p className="rounded border border-white form-control px-2 py-2 text-3xl font-light font-serif text-white">
        {description}
      </p>
      <button
        className="rounded bg-gradient-to-r from-gray-500 to-black-500 text-white font-light uppercase px-3 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-1"
        type="button"
        onClick={() => setShowModalEdit(true)}
      >
        Edit
      </button>
      <button
        className="rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => deletingNotes(id)}
      >
        Delete
      </button>
      </div>
      

      <div>
        {showModal ? (
          <>
            <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-black rounded-t">
                    <input
                      type="text"
                      className="form-control bg-white px-4 py-2 text-4xl font-semibold font-serif bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg"
                      value={inputTitle}
                      name="title"
                      placeholder="Title"
                      onChange={(e) => {
                        setInputTitle(e.target.value);
                      }}
                    />
                  </div>
                  {/*body*/}
                  <div className="relative p-10 flex-auto">
                    <textarea
                      className="text-2xl bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg form-control block w-full px-3 py-1.5 text-base font-serif text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition m-0"
                      value={inputDescription}
                      name="description"
                      rows="3"
                      placeholder="Knit your note!"
                      onChange={(e) => {
                        setInputDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={postUpdatedNote}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
            
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Note;
