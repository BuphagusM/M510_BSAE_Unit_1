import {useEffect, useState} from 'react';
import {CourseDTO} from '../model/course-dto.ts';
import {
    fetchCourses,
    fetchCreateCourse,
    fetchRemoveCourseById,
    fetchUpdateCourseById
} from '../services/courses-data-http-request';

export const useCourses = () => {
    const [courses, setCourses] = useState<CourseDTO[]>([]);

    useEffect(() => {
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);

    const deleteCourse = async (courseId: number): Promise<string> => {
        const message = await fetchRemoveCourseById(courseId)
        setCourses(prev => prev.filter(c => c.id !== courseId));
        return message;
    };

    const updateCourse = async (courseDTO: CourseDTO): Promise<string> => {
        const message = await fetchUpdateCourseById(courseDTO.id, courseDTO)
        setCourses(prev => prev.map(c => c.id === courseDTO.id ? courseDTO : c))
        return message;
    };

    const createCourse = async (courseDTO: CourseDTO): Promise<string> => {
        const message = await fetchCreateCourse(courseDTO)
        const data = await fetchCourses()
        setCourses(data)
        return message;
    };

    return {courses, deleteCourse, updateCourse, createCourse};
};