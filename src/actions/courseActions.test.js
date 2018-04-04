import expect from 'expect';
import * as courseActions from './courseActions.js';
import * as types from './actionTypes';

describe('Course Actions', () => {
  describe('Create courses success', () => {
    it('should create a course', () => {
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    })
  })
});
