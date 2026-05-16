// course-service.ts

import * as courseRepository from '../repositories/course-repository';
import {CourseEntity} from '../models/course-entity';

export const getAllCourses = (): CourseEntity[] => {
    return courseRepository.getAllCoursesEntity();
};

export const getCourseById = (id: number): CourseEntity | undefined => {
    return courseRepository.getCourseByIdEntity(id);
};

export const getCourseCountByStatus = (status: 'active' | 'inactive' | 'all'): number => {
    if (status === 'all') {
        return courseRepository.getAllCoursesEntity().length;
    } else {
        return courseRepository.getCourseCountByStatusEntity(status);
    }
};