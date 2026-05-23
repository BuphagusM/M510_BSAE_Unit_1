import {useEffect, useState} from 'react';
import {CourseDTO} from '../model/course-dto.ts';
import {fetchCourses, fetchRemoveCourseById} from '../services/courses-data-http-request';

export const useCourses = () => {
    const [courses, setCourses] = useState<CourseDTO[]>([]);

    useEffect(() => {
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);

    const deleteCourse = (courseId: number): Promise<void> => {
        return fetchRemoveCourseById(courseId)
            .then(() => setCourses(prev => prev.filter(c => c.id !== courseId)));
    };

    return {courses, deleteCourse};
};