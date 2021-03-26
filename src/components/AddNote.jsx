import React from "react";

const AddNote = () => {
  return (
    <div className="add-note">
      <form>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="body" rows="3" placeholder="Take a note..."></textarea>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddNote;
