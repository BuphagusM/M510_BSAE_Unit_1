import {useEffect, useState} from 'react';
import {CourseDTO} from '../model/course-dto.ts';
import {fetchCourses} from '../services/courses-data-http-request';

export const useCourses = () => {
    const [courses, setCourses] = useState<CourseDTO[]>([]);

    useEffect(() => {
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);

    return {courses};
};