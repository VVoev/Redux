import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

import { authorsFormatedForDropDown } from '../../selectors/selectors';



export class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course: course });
  }

  courseFormIsValid() {
    let formisValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters';
      formisValid = false;
    }

    this.setState({ errors: errors })
    return formisValid;
  }

  saveCourse(event) {
    event.preventDefault();
    if (this.courseFormIsValid()) {
      return;
    }
    this.setState({ saving: true });
    this.props.actions.saveCourse(this.state.course)
      .then(() => {
        this.redirect();
      }).catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      })
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Course Saved');
    this.context.router.push('/courses');
  }
  render() {
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        saving={this.state.saving}
      />
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  if (course) {
    return course[0];
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (courseId) {
    course = getCourseById(state.courses, courseId);
  }
  return {
    course: course,
    authors: authorsFormatedForDropDown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
