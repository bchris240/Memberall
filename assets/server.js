const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Function to read and parse db.json
const readDbFile = () => {
  const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
  return JSON.parse(data);
};

// Function to write to db.json
const writeDbFile = (data) => {
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data, null, 2), 'utf8');
};

// API Routes
app.get('/api/notes', (req, res) => {
  const db = readDbFile();
  res.json(db.notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const db = readDbFile();
  
  // Assign a unique id to the new note
  newNote.id = Unique;
  
  db.notes.push(newNote);
  writeDbFile(db);

  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const db = readDbFile();

  // Find the index of the note with the given id
  const noteIndex = db.notes.findIndex((note) => note.id === noteId);

  if (noteIndex !== -1) {
    // Remove the note from the array
    db.notes.splice(noteIndex, 1);
    writeDbFile(db);
    res.status(200).send(`Note with ID ${noteId} deleted successfully.`);
  } else {
    res.status(404).send(`Note with ID ${noteId} not found.`);
  }
});

// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
