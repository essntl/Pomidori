// elements
const notesList = document.getElementById("notes-list");
const addNoteButton = document.getElementById("add-note-btn");
const deleteButton = document.querySelector(".delete-btn");
// variables
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let pinnedNotes = [];

function addNote() {
  notes.push("");
  saveNotes();
  displayNotes();
  
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    const textarea = document.createElement("textarea");
    const deleteBtn = document.createElement("button");
    textarea.value = note;
    textarea.placeholder = "Write your note here..."
    div.classList.add("note-card");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "x";
    deleteBtn.onclick = function () {
      deleteNote(index);
    };
    div.appendChild(textarea);
    notesList.appendChild(div);
    div.appendChild(deleteBtn);
    textarea.addEventListener("input", (e) => {
        notes[index] = e.target.value;
        saveNotes();
    });
  });
}

displayNotes();

addNoteButton.addEventListener("click", addNote);
