// courses-data-http-request.ts
import {CourseDTO} from '../model/course-dto.ts';


export const fetchCourses = async (): Promise<CourseDTO[]> => {
    const response = await fetch('http://localhost:3001/api/v1/courses');
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Kurse: ${response.status}`);
    }
    return response.json() as Promise<CourseDTO[]>;
};