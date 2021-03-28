import React from "react";

const Note = ({ note, deleteNote }) => {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
