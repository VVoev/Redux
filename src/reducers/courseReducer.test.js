import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';
import { access } from 'fs';

describe('Course Actions', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];

    const newCourse = { title: 'C' };

    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);


    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  })

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' },
      { id: 'C', title: 'C' },
    ];

    const course = { id: 'B', title: 'New Title' };
    const action = actions.updateCourseSuccess(course);


    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id === course.id);
    const untouchedCourseA = newState.find(a => a.id === 'A');
    const untouchedCourseC = newState.find(a => a.id === 'C');

    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourseA.title).toEqual('A');
    expect(untouchedCourseC.title).toEqual('C');
  })
})
