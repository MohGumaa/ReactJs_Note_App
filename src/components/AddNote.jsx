import React from "react";
import { useState } from "react";

import { v4 } from "uuid";

const AddNote = ({ newNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    id: v4()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    newNote(note);
    setNote({
      title: "",
      body: ""
    });
  };

  return (
    <div className="add-note">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="body"
          rows="3"
          placeholder="Take a note..."
          value={note.body}
          onChange={handleChange}
        ></textarea>
        <button onClick={submitHandle}>Add</button>
      </form>
    </div>
  );
};

export default AddNote;
