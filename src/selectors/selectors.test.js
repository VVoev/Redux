import expect from 'expect';
import { authorsFormatedForDropDown } from './selectors';

describe('Authors Selectors', () => {
  describe('AuthorsFormattedForDropDown', () => {
    it('should return author data formated for dropdown', () => {
      const authors = [
        { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
        { id: 'scot-allen', firstName: 'Scot', lastName: 'Allen' },
      ];

      const expected = [
        { value: 'cory-house', text: 'Cory House' },
        { value: 'scot-allen', text: 'Scot Allen' },
      ];

      expect(authorsFormatedForDropDown(authors)).toEqual(expected);
    });
  });
});

