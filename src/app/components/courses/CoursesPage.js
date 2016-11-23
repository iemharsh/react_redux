import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as coursesAction from '../../actions/coursesAction';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const courses = this.props.courses;
        return (
            <div>
                <h1>Courses</h1>
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