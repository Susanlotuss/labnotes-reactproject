import React from "react";

const Note = ({title, description, user}) => {
    return(
        <>
            <div className="border-2 m-10 text-center">
            <p>{user}</p>
            <p className="form-control px-4 py-2 text-4xl font-semibold font-serif">
                        {title}</p>
            <p className="form-control block px-3 py-1.5 text-base font-serif text-gray-700 bg-white bg-clip-padding border border-solid 
                        border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none">
                        {description}</p>
                    <button
                    className="bg-orange-500 text-white active:bg-emerald-600 font-bold text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => (false)}>
                    Edit
                  </button>
            </div>
        </>
    )
}

export default Note;