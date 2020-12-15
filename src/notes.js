const fs = require('fs');

//=============addNotes====================
const addNote = (title, body, filename) => {
  const notes = loadNotes(filename);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({title: title, body: body});
    saveNotes(notes, filename);
    return 'Adding a new note';
  }
  return 'note!! Title has already been taken';
};

const saveNotes = (notes, filename) => {
  fs.writeFileSync(filename, JSON.stringify(notes));
};

const loadNotes = (filename) => {
  const data = fs.readFileSync(filename, 'utf8');
  return JSON.parse(data);
};

//===============remove note============================
const removeNote = (title, filename) => {
  const notes = loadNotes(filename);
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep, filename);
    return 'notes removed';
  }
  return 'No Note Found!!';
};

//===========================Listing Note=============
const listNotes = (filename) => {
  const notes = loadNotes(filename);
  return notes.map((note) => {
    return note.title;
  });
};

//============================READ Notes============================
const readNotes = (title, filename) => {
  const notes = loadNotes(filename);
  const note = notes.find((note) => note.title === title);
  return note || 'Notes Not Found';
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
