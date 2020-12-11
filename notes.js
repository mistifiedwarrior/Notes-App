const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  return 'Your notes...';
};
//=============addNotes====================
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({title: title, body: body});
    saveNotes(notes);
    console.log(chalk.green.bold('Adding a new note'));
  } else {
    console.log(chalk.red.inverse('note!! Title has already been taken'));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json');
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
    console.log(chalk.red.bold('Note Not Found'));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
