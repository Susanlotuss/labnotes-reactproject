import React from "react";
import { useState } from "react";

const Note = ({ title, description, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [inputTitle, setInputTitle] = useState("");

  return (
    <div className="border-2 m-10 text-center">
      <p>{user}</p>
      <p className="form-control px-4 py-2 text-4xl font-semibold font-serif">
        {title}
      </p>
      <p
        className="form-control block px-3 py-1.5 text-base font-serif text-gray-700 bg-white bg-clip-padding border border-solid 
                        border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
      >
        {description}
      </p>
      <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>

      <div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <input
                      type="text"
                      className="form-control px-4 py-2 text-4xl font-semibold font-serif"
                      value={inputTitle}
                      name="title"
                      placeholder="Title"
                      onChange={(e) => {setInputTitle(e.target.value)}}
                    />
                  </div>
                  {/*body*/}
                  <div className="relative p-10 flex-auto">
                    <textarea
                      className="form-control block w-full px-3 py-1.5 text-base font-serif text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      value={description}
                      name="description"
                      rows="3"
                      placeholder="Knit your note!"
                      onChange={() => false}
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
                      onClick={() => false}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Note;
