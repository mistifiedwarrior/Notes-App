const fs = require('fs');
const chalk = require('chalk');

//=============addNotes====================
const addNote = (title, body, filename) => {
  const notes = loadNotes(filename);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({title: title, body: body});
    saveNotes(notes, filename);
    return 'Adding a new note';
  } else {
    return 'note!! Title has already been taken';
  }
};

const saveNotes = (notes, filename) => {
  fs.writeFileSync(filename, JSON.stringify(notes));
};

// const sum = (a, b) => {
//   return a + b;
// };

const loadNotes = (filename) => {
  try {
    const data = fs.readFileSync(filename);
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//===============remove note============================
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  // const notesToKeep = notes.filter(function (note) {
  //   return note.title !== title;
  // });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('notes removed'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No Note Found!!'));
  }
};

//===========================Listing Note=============
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.yellowBright.bold(note.title));
  });
};

//============================READ Notes============================
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(chalk.green.inverse(note.body));
  } else {
    console.log(chalk.red.bold('Notes Not Found'));
    // return 'Notes not Found';
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
