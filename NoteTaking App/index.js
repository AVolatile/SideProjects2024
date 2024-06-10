document.addEventListener("DOMContentLoaded", (event) => {
  loadNotes();
});

function addNote() {
  const noteText = document.getElementById("note-text").value;
  if (noteText.trim() === "") {
    alert("Please write something before adding a note.");
    return;
  }

  const notes = getNotes();
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("note-text").value = "";
  loadNotes();
}

function loadNotes() {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  const notes = getNotes();
  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.textContent = note;
    notesList.appendChild(noteElement);
  });
}

function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}
