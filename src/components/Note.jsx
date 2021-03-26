import React from "react";

const Note = ({ note }) => {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <button>Delete</button>
    </div>
  );
};

export default Note;
