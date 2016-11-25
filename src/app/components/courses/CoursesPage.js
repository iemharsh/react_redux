import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as coursesAction from '../../actions/coursesAction';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    redirectToAddCoursePage () {
        browserHistory.push('/course');
    }
    render() {
        const courses = this.props.courses;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses}/>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
      courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(coursesAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);