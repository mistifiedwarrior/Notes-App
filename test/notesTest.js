const fs = require('fs');
const assert = require('chai').assert;
const notes = require('../src/notes');

describe('notesTest', () => {
  const fileName = `${__dirname}/dummyData.json`;
  describe('addNote', () => {
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

  describe('removeNote', () => {
    beforeEach(() => {
      fs.writeFileSync(fileName, '[{"title": "title","body": "body"}]');
    });

    it('should remove the notes of the given title', () => {
      const actual = notes.removeNote('title', fileName);
      const expected = 'notes removed';
      assert.equal(actual, expected);
    });

    it('should return No Notes Found when title does not matched', () => {
      const actual = notes.removeNote('titled', fileName);
      const expected = 'No Note Found!!';
      assert.equal(actual, expected);
    });
  });
});
