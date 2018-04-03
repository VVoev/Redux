import React, { PropTypes } from 'react';
import TextInput from './../common/TextInput';
import SelectInput from './../common/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors, saving }) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <br />
      <h5>Author</h5>
      <SelectInput
        name="authorId"
        label="authorId"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <br />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />

      <br />

      <input onClick={onSave} type="submit" className="btn btn-primary" disabled={saving} value={saving ? 'Saving...' : 'Save'} />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default CourseForm;
