import {useEffect, useState} from 'react';
import {CourseDTO} from '../model/course-dto.ts';
import {
    fetchCourses,
    fetchCreateCourse,
    fetchRemoveCourseById,
    fetchUpdateCourseById
} from '../services/courses-data-http-request';
import {CourseEntity} from '../model/course-entity.ts';

export const useCourses = () => {
    const [courses, setCourses] = useState<CourseDTO[]>([]);

    useEffect(() => {
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);

    const deleteCourse = async (courseId: number): Promise<void> => {
        await fetchRemoveCourseById(courseId)
        setCourses(prev => prev.filter(c => c.id !== courseId));
    };

    const updateCourse = async (courseDTO: CourseDTO): Promise<void> => {
        await fetchUpdateCourseById(courseDTO.id, courseDTO)
        setCourses(prev => prev.map(c => c.id === courseDTO.id ? courseDTO : c))
    };

    const createCourse = async (courseEntity: CourseEntity): Promise<void> => {
        await fetchCreateCourse(courseEntity)
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    };

    return {courses, deleteCourse, updateCourse, createCourse};
};