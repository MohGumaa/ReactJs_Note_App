import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Footer from "./components/Footer";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      body: "The content of first note"
    },
    {
      id: 2,
      title: "Second Note",
      body: "The content of second note"
    },
    {
      id: 3,
      title: "Third Note",
      body: "The content of third note"
    },
    {
      id: 4,
      title: "Forth Note",
      body: "The content of forth note"
    },
    {
      id: 5,
      title: "Fifth Note",
      body: "The content of fifth note"
    }
  ]);

  // Delete specific note by compare id
  function deleteNote(id) {
    // const newNote = notes.filter((note) => note.id !== id);

    // // Set notes to new notes
    // setNotes(newNote);

    // Filter array notes and delete match one
    setNotes((PrevNotes) => {
      return PrevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  // Add New note
  const newNote = (note) => {
    setNotes((preNote) => [...preNote, note]);
  };

  return (
    <div>
      <Header />
      <main>
        <AddNote newNote={newNote} />
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
