import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="courses" components={CoursesPage} />
        <Route path="course" components={ManageCoursePage} />
        <Route path="course/:id" components={ManageCoursePage} />
    </Route>
)