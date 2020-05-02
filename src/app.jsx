import React from "react";
import Header from "./components/header";
import createCard from "./components/minors/card";
import Footer from "./components/footer";
import NewNote from "./components/newNote";
// import notes from './notes';
function App() {
  const [notes, setnotes] = React.useState([
    {
      id: 0,
      title: "First Note",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum dictum tincidunt. Nullam in convallis lectus. Donec vestibulum sagittis lectus, sit amet posuere odio pharetra ac. Nullam pulvinar orci vel aliquet malesuada. Nulla maximus, lorem non rutrum viverra, mauris mi interdum neque, id commodo dui ante sit amet nisi.  ",
    },
  ]);

  function addNote(title, content) {
    const newId=notes.length;
    setnotes((prev) => {
      return [
        ...prev,
        {
          id:newId,
          title: title,
          note: content,
        },
      ];
    });
  }
  function deleteNote(id) {
    setnotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <NewNote add={addNote}/>
      <div className="row">{notes.map((note)=>createCard(note,deleteNote))}</div>
      <Footer />
    </div>
  );
}

export default App;
