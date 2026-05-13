import { useEffect, useState } from 'react';
import { Course } from '../model/course';
import { fetchCourseById, fetchCourses } from '../services/courses-data-http-request';

export const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);

    return { courses};
};


export const useCourseById = (id: number) => {
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        fetchCourseById(id)
            .then(data => setCourse(data))
            .catch(err => console.error(err));
    }, [id]);

    return { course };
}