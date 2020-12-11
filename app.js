//====================VALIDATOR==================
// const validator = require('validator');
// console.log(validator.isEmail('angel@example.com'));
// console.log(validator.isURL('https://www.jobsalrt.com'));

//==========================CHALK=============
// const chalk = require('chalk');
// console.log(chalk.green.inverse('I Love My Family'));
// console.log(chalk.white.bgRed.bold('I Love My Mother'));

// console.log(process.argv[2]);

const chalk = require('chalk');
const {argv} = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

// const command = process.argv[2];
// console.log(process.argv);
// customize yargs version=============
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
    notes.addNote(argv.title, argv.body);
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
    notes.removeNote(argv.title);
  },
});

// ===========Create a List command================================
yargs.command({
  command: 'list',
  describe: 'Listing your notes',
  handler() {
    notes.listNotes();
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
    notes.readNotes(argv.title);
  },
});
// console.log(yargs.argv);
yargs.parse();
