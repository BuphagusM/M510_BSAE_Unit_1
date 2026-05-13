// course-service.ts

import { getAllCoursesEntity, getCourseByIdEntity } from '../repositories/course-repository';
import { CourseEntity } from '../models/course-entity';

export const getAllCourses = (): CourseEntity[] => {
  return getAllCoursesEntity();
};

export const getCourseById = (id: number): CourseEntity | undefined => {
  return getCourseByIdEntity(id);
};