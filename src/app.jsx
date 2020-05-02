import React from "react";
import Header from "./components/header";
import createCard from "./components/minors/card";
import Footer from "./components/footer";
import NewNote from "./components/newNote";
var ls = require("local-storage");

function App() {
  const storedNotes = JSON.parse(ls.get("notes"));
  const nullNote = {
    id: 9999999,
    title: "NULL",
    note: "NULL",
  };
  // console.log(storedNotes);
  const [notes, setnotes] = React.useState(() => {
    if (storedNotes != null) {
      return [
        storedNotes[0] ? storedNotes[0] : nullNote,
        storedNotes[2] ? storedNotes[2] : nullNote,
        storedNotes[1] ? storedNotes[1] : nullNote,
        storedNotes[3] ? storedNotes[3] : nullNote,
        storedNotes[4] ? storedNotes[4] : nullNote,
        storedNotes[5] ? storedNotes[5] : nullNote,
        storedNotes[6] ? storedNotes[6] : nullNote,
        storedNotes[7] ? storedNotes[7] : nullNote,
      ];
    }
    return [
      {
        id: 0,
        title: "Hey, I'm a note!",
        note:
          "Click the delete icon below to delete me and start making your own notes ;)",
      },
    ];
  });

  function saveNotestoLocal(oldNotes, id) {
    if (notes !== oldNotes) {
      const savedNotes = notes.filter((note) => {
        return note.id !== 9999999;
      });
      ls("notes", JSON.stringify(savedNotes));
      console.log("Notes Saved");
    } else {
      console.log(id);
      setnotes((prevNotes) => {
        oldNotes = prevNotes;
        return prevNotes.filter((note) => note.id !== id);
      });
      setTimeout(() => {
        saveNotestoLocal(oldNotes, id);
      }, 1000);
    }
  }

  function addNote(title, content) {
    const newId = Math.round(Math.random() * 100);
    setnotes((prev) => {
      return [
        ...prev,
        {
          id: newId,
          title: title,
          note: content,
        },
      ];
    });
    setTimeout(saveNotestoLocal, 1000);
  }
  function deleteNote(id) {
    var oldnotes;
    setnotes((prevNotes) => {
      oldnotes = prevNotes;
      return prevNotes.filter((note) => note.id !== id);
    });
    saveNotestoLocal(oldnotes, id);
  }
  return (
    <div>
      <Header />
      <NewNote add={addNote} />
      <div className="row">
        {notes.map((note) => createCard(note, deleteNote))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
