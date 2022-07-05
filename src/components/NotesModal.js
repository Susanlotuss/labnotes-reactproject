import React from "react";
import { useState } from "react";
import { saveNotes } from "../Firebase/api";

const initialStateValue = {
  user: "",
  title: "",
  description: ""
};

export default function Modal({getMyNotes}) {

  const [showModal, setShowModal] = useState(false);

  const [noteData, setNoteData] = useState(initialStateValue);

  const handleSave = async e => {
    e.preventDefault();

    if (!noteData.id) {
      await saveNotes(noteData);
      getMyNotes();
    }
    setNoteData({...initialStateValue});
  }

  const handleInputChange = e => {
    const {name, value} = e.target;
    setNoteData({...noteData, [name]: value})
  }


  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        +
      </button>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  
                  <input
                    type="text" 
                    className="form-control px-4 py-2 text-4xl font-semibold font-serif"
                    value={noteData.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleInputChange}/>
                   
              
                </div>
                {/*body*/}
                <div className="relative p-10 flex-auto">
                    
                <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-serif text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                  value={noteData.description}
                  name="description"
                  rows="3"
                  placeholder="Knit your note!"
                  onChange={handleInputChange}
                ></textarea>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}