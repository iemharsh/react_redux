import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as coursesAction from '../../actions/coursesAction';
import * as authorsAction from '../../actions/auhtorsAction';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };
        this.saveCourse = this.saveCourse.bind(this);
        this.updateCourseState = this.updateCourseState.bind(this);
    }
    componentWillReceiveProps (nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState (event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        this.setState( {course: course});
    }

    saveCourse (event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => {
                this.redirect();
            });
    }
    redirect () {
        this.setState({saving: false});
        // toastr.success('Course Saved');
        this.context.router.push('/courses');

    }



    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    loading={this.state.saving}
                />

            </div>
        );
    }
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object
}
function getCourseById (courses, id) {
    const course = courses.filter( course => course.id == id);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    let course = {id: '', watchRef: '', title: '', authorId: '', length: '', category: ''};
    const courseId = ownProps.params.id;

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map( (author) => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(coursesAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);