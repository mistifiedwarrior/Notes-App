const fs = require('fs');
const assert = require('chai').assert;
const notes = require('../src/notes');

describe('notesTest', () => {
  describe('addNote', () => {
    const fileName = `${__dirname}/dummyData.json`;
    beforeEach(() => {
      fs.writeFileSync(fileName, '[{"title": "title","body": "body"}]');
    });

    it('should add note to notes-app', () => {
      const actual = notes.addNote('node.js', 'refactoring the code', fileName);
      const expected = 'Adding a new note';
      assert.equal(actual, expected);
    });

    it('should not add note to notes-app if title already exists', () => {
      const actual = notes.addNote('title', 'hello world', fileName);
      const expected = 'note!! Title has already been taken';
      assert.equal(actual, expected);
    });
  });
});
