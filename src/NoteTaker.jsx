import { useState } from "react";
const NoteTaker = () => {
  const [notes, setNotes] = useState([
    {
      id: Math.floor(Math.random() * 100),
      name: "First Note",
      status: false,
    },
  ]);

  const [input, setInput] = useState("");
  const toggleButton = (targetNote) => {
    console.log(targetNote);
    console.log(notes);
    const filteredNotes = notes.map((note) =>
      note.id === targetNote.id ? { ...note, status: !note.status } : note
    );
    console.log("filteredNotes", filteredNotes);

    setNotes(filteredNotes);
  };
  const addNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 100),
      name: input,
      status: true,
    };
    if (input !== "") {
      setNotes([...notes, newNote]);
    } else alert("Add note first");
    setInput("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  onkeydown = (event) => {
    if (event.key === "Enter") {
      addNote();
    }
  };

  const minimizer = (text) => {
    let newText = "";
    newText = text.slice(0, 250);
    return newText + " ..........";
  };

  //   const statusChanger = (id) => {};s
  return (
    <div className=" flex justify-center mt-20">
      <div className=" border p-5 rounded-lg flex flex-col gap-5 w-[500px]">
        <p className="text-center font-bold text-[30px]">Note Taker</p>
        <textarea
          type="text"
          placeholder="Enter your note here..."
          className="border rounded-md  p-4"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <p>Press enter to add note</p>
        <button
          className="border bg-blue-500 p-3 rounded-md text-white font-semibold"
          onClick={addNote}
        >
          Add Note
        </button>
        <div className="flex flex-col gap-3">
          {notes.map((note) => {
            return (
              <div className="border rounded-lg">
                <div className="flex justify-between bg-slate-200 p-4">
                  <p>Note #{note.id}</p>
                  <button
                    className="text-red-500"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>

                {note.name.length > 150 ? (
                  <div>
                    <p className="p-4  break-words">
                      {note.status ? minimizer(note.name) : note.name}
                    </p>

                    <button
                      className=" px-4 mx-4  my-2 py-1 border rounded-md bg-blue-200 "
                      onClick={() => toggleButton(note)}
                    >
                      See {note.status ? "more" : "less"}
                    </button>
                  </div>
                ) : (
                  <p className="p-4">{note.name}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NoteTaker;
