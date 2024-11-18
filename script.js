let notes = []; // Initialize an empty array to store note objects
let editingNoteId = null; // Variable to keep track of the editing state (which note is being edited)

// Add an event listener to the window object that triggers when the page loads
window.addEventListener("load", () => {
    getNotesFromLocalStorage(); // Call the function to retrieve notes from local storage when the page loads
});

// Function to add a new note
function addNote() {
    const noteTitle = document.getElementById("title").value.trim(); // Get the title input value and trim whitespace
    const noteContent = document.getElementById("content").value.trim(); // Get the content input value and trim whitespace
    const noteCategory = document.getElementById("category").value.toLowerCase(); // Get the selected category and convert it to lowercase
    const noteTime = new Date().toLocaleString(); // Get the current date and time as a string

    // Error message element
    const errorMessage = document.getElementById("error-message"); // Get the error message element
    if (!noteTitle || !noteContent) { // Check if title or content is empty
        errorMessage.textContent = "Write a note and give it a title before you post it."; // Display error message
        return; // Exit the function if validation fails
    }
    errorMessage.textContent = ""; // Clear the error message if validation passes

    // Create a note object
    const note = {
        title: noteTitle, // Set the title property
        content: noteContent, // Set the content property
        category: "#" + noteCategory, // Set the category property with a '#' prefix
        id: editingNoteId ? editingNoteId : "ID: " + notes.length, // Set the ID, using the editing ID if available, otherwise generate a new one
        timestamp: noteTime // Set the timestamp property
    };

    // If there is a note being edited, update it
    if (editingNoteId) {
        const index = notes.findIndex(item => item.id === editingNoteId); // Find the index of the note being edited
        notes[index] = note; // Update the note in the array
        editingNoteId = null; // Reset the editing ID
    } else {
        notes.push(note); // Add the new note to the notes array
    }

    // Clear the form fields after adding the note
    document.getElementById("title").value = ""; // Clear the title input
    document.getElementById("content").value = ""; // Clear the content textarea
    document.getElementById("category").selectedIndex = 0; // Reset the category dropdown to the first option

    saveNotesToLocalStorage(); // Save the updated notes array to local storage
    displayNote(note); // Display the newly added or updated note in the UI
}

// Function to display a note in the notes container
function displayNote(note) {
    const notesContainer = document.getElementById("notes-container"); // Get the notes container element

    let noteItem = document.createElement("article"); // Create a new article element for the note
    noteItem.className = "note"; // Set the class name for styling

    let noteTimestamp = document.createElement("p"); // Create a paragraph element for the timestamp
    noteTimestamp.className = "noteTimestamp"; // Set the class name for styling
    noteTimestamp.textContent = note.timestamp; // Set the text content to the note's timestamp

    let noteTitle = document.createElement("h3"); // Create an h3 element for the note title
    noteTitle.className = "noteContent"; // Set the class name for styling
    noteTitle.textContent = note.title; // Set the text content to the note's title

    let noteContent = document.createElement("p"); // Create a paragraph element for the note content
    noteContent.className = "noteContent"; // Set the class name for styling
    noteContent.textContent = note.content; // Set the text content to the note's content

    let noteCategory = document.createElement("p"); // Create a paragraph element for the note category
    noteCategory.className = "noteCategory"; // Set the class name for styling
    noteCategory.textContent = note.category; // Set the text content to the note's category

    let noteId = document.createElement("p"); // Create a paragraph element for the note ID
    noteId.className = "noteId"; // Set the class name for styling
    noteId.textContent = note.id; // Set the text content to the note's ID

    let editButton = document.createElement("button"); // Create a button element for editing the note
    editButton.className = "editButton"; // Set the class name for styling
    editButton.textContent = "Edit"; // Set the button text to "Edit"

    let deleteButton = document.createElement("button"); // Create a button element for deleting the note
    deleteButton.className = "deleteButton"; // Set the class name for styling
    deleteButton.textContent = "Delete"; // Set the button text to "Delete"

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", () => {
        notes = notes.filter((item) => item.id !== note.id); // Remove the note from the notes array
        notesContainer.removeChild(noteItem); // Remove the note item from the UI
        saveNotesToLocalStorage(); // Save the updated notes array to local storage
    });

    // Set the ID of the note item based on its category
    if (note.category === "#school") {
        noteItem.id = "schoolNote"; // Set the ID for school notes
    } else if (note.category === "#work") {
        noteItem.id = "workNote"; // Set the ID for work notes
    } else if (note.category === "#other") {
        noteItem.id = "otherNote"; // Set the ID for other notes
    }

    // Append all the created elements to the note item
    noteItem.appendChild(noteTimestamp); // Add the timestamp to the note item
    noteItem.appendChild(noteTitle); // Add the title to the note item
    noteItem.appendChild(noteContent); // Add the content to the note item
    noteItem.appendChild(noteCategory); // Add the category to the note item
    noteItem.appendChild(noteId); // Add the ID to the note item
    noteItem.appendChild(editButton); // Add the edit button to the note item
    noteItem.appendChild(deleteButton); // Add the delete button to the note item
    notesContainer.insertBefore(noteItem, notesContainer.firstChild); // Insert the note item at the top of the notes container

    // Add an event listener for the edit button
    editButton.addEventListener("click", () => {
        // Fill the form with the note's data for editing
        document.getElementById("title").value = note.title; // Set the title input to the note's title
        document.getElementById("content").value = note.content; // Set the content textarea to the note's content
        document.getElementById("category").value = note.category.substring(1); // Set the category dropdown, removing '#' from the category

        // Save the ID of the note being edited
        editingNoteId = note.id; // Store the original ID for editing

        // Remove the note from the list to prepare for updating
        notes = notes.filter((item) => item.id !== note.id); // Remove the note from the notes array
        notesContainer.removeChild(noteItem); // Remove the note item from the UI
        saveNotesToLocalStorage(); // Save the updated notes array to local storage
    });
}

// Function to save notes to local storage
function saveNotesToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes)); // Convert the notes array to a JSON string and save it to local storage
}

// Function to retrieve notes from local storage
function getNotesFromLocalStorage() {
    const storedNotes = localStorage.getItem("notes"); // Get the stored notes from local storage
    if (storedNotes) { // Check if there are stored notes
        try {
            notes = JSON.parse(storedNotes); // Parse the JSON string into an array of notes
            notes = notes.filter(validateNoteData); // Remove invalid notes from the array
            notes.forEach((note) => displayNote(note)); // Display each note on the screen
        } catch (error) {
            console.error("Error parsing notes: ", error); // Log an error message if parsing fails
            notes = []; // Reset notes if the data is corrupt
            localStorage.removeItem("notes"); // Clear local storage
        }
    }
}

// Event listeners

// Add an event listener to the note form for the submit event
document.getElementById("noteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    addNote(); // Call the function to add a note
});

// Clear local storage when the clear button is clicked
document.getElementById("clearButton").addEventListener("click", (event) => {
    localStorage.clear(); // Clear local storage
    notes = []; // Empty the notes array
    const notesContainer = document.getElementById("notes-container"); // Get the notes container element
    notesContainer.innerHTML = ""; // Remove all notes from the UI
});

// Function to sort notes by timestamp
function sortNotesByTimestamp() {
    notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Sort notes in descending order by timestamp
    updateNotesDisplay(); // Update the display of notes
}

// Function to sort notes by title
function sortNotesByTitle() {
    notes.sort((a, b) => a.title.localeCompare(b.title)); // Sort notes in alphabetical order by title
    updateNotesDisplay(); // Update the display of notes
}

// Function to update the display of notes
function updateNotesDisplay() {
    const notesContainer = document.getElementById("notes-container"); // Get the notes container element
    notesContainer.innerHTML = ""; // Clear existing notes

    notes.forEach(note => displayNote(note)); // Display each note
}

// Add an event listener to the sort button
document.getElementById("sortButton").addEventListener("click", () => {
    const sortOption = document.getElementById("sortOptions").value; // Get the selected sort option

    if (sortOption === "timestamp") {
        sortNotesByTimestamp(); // Sort notes by date
    } else if (sortOption === "title") {
        sortNotesByTitle(); // Sort notes by title
    }
});

// TODO:
// - Filter categories
// - Sorting (date)
// - Main menu
// - Add animations when the user saves or deletes notes.
