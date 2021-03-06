const {argv} = require('yargs');
const yargs = require('yargs');
const notes = require('./src/notes');
const fileName = `${__dirname}/notes.json`;

yargs.version('1.1.0');

// =================Create add command========
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    const result = notes.addNote(argv.title, argv.body, fileName);
    console.log(result);
  },
});

//==========Create a remove command=========
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler() {
    const result = notes.removeNote(argv.title, fileName);
    console.log(result);
  },
});

// ===========Create a List command================================
yargs.command({
  command: 'list',
  describe: 'Listing your notes',
  handler() {
    const result = notes.listNotes(fileName);
    console.log(result);
  },
});

// =====================create a read command========================
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    const result = notes.readNotes(argv.title, fileName);
    console.log(result);
  },
});
yargs.parse();
