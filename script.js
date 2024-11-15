// An array holding all my note objects
let notes = [];

window.addEventListener("load", () => {
    getNotesFromLocalStorage();
});

//Functions

function addNote() {
    const noteTitle = document.getElementById("title").value;
    const noteContent = document.getElementById("content").value;
    const noteCategory = document.getElementById("category").value.toLowerCase();
    const noteTime = new Date().toLocaleString();

    const note = {
        title: noteTitle,
        content: noteContent,
        category: "#" + noteCategory,
        id: "#" + notes.length,
        timestamp: noteTime
    };

    notes.push(note);
    
    console.log(notes);

    document.getElementById("title").value = ""; // Töm titel-fältet
    document.getElementById("content").value = ""; // Töm innehåll-fältet
    document.getElementById("category").selectedIndex = 0; // Återställ kategori till första alternativet
    
    saveNotesToLocalStorage(); // save updated list to local storage

    displayNote(note); // Calls display function to show new note on UI

    
}

function displayNote(note) {
    const notesContainer = document.getElementById("notes-container");

    let noteItem = document.createElement("article");
    noteItem.className = "note";

    let noteTimestamp = document.createElement("p")
    noteTimestamp.className = "noteTimestamp";
    noteTimestamp.textContent = note.timestamp;

    let noteTitle = document.createElement("h3");
    noteTitle.className = "noteContent";
    noteTitle.textContent = note.title;

    let noteContent = document.createElement("p");
    noteContent.className = "noteContent";
    noteContent.textContent = note.content;

    let noteCategory = document.createElement("p");
    noteCategory.className = "noteCategory";
    noteCategory.textContent = note.category;

    let noteId = document.createElement("p");
    noteId.className = "noteId";
    noteId.textContent = note.id;

    let editButton = document.createElement("button");
    editButton.className = "editButton";
    editButton.textContent = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        notes = notes.filter((item) => item.id !== note.id);
        notesContainer.removeChild(noteItem);
        saveNotesToLocalStorage();
    });

    if (note.category === "#school") {
        noteItem.id = "schoolNote"
    } else if (note.category === "#work") {
        noteItem.id = "workNote"
    } else if (note.category === "#other") {
        noteItem.id = "otherNote"
    }

    noteItem.appendChild(noteTimestamp);
    noteItem.appendChild(noteTitle);
    noteItem.appendChild(noteContent);
    noteItem.appendChild(noteCategory);
    noteItem.appendChild(noteId);
    noteItem.appendChild(editButton);
    noteItem.appendChild(deleteButton);
    notesContainer.insertBefore(noteItem, notesContainer.firstChild);
}

//
function saveNotesToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotesFromLocalStorage() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      notes = JSON.parse(storedNotes); // goes through each note
       notes.forEach((note) => displayNote(note)); // each note is displayed on the screen
    }
  }

//Event listeners

document.getElementById("noteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addNote();
});


//Rensar local storage
document.getElementById("clearButton").addEventListener("click", (event) => {
    localStorage.clear(); // Rensa local storage
    notes = []; // Töm notes-arrayen
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = ""; // Ta bort alla anteckningar från UI
});