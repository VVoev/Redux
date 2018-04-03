import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {

  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => { },
    onChange: () => { }

  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
  it('render from and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
  })

  it('Save button is labeled "Save" when its not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('Save button is labeled "Save..." when its saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
})
