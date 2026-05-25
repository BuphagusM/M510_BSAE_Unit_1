// courses-data-http-request.ts
import {CourseDTO} from '../model/course-dto.ts';


export const fetchCourses = async (): Promise<CourseDTO[]> => {
    const response = await fetch('http://localhost:3001/api/v1/courses');
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Kurse: ${response.status}`);
    }
    return response.json() as Promise<CourseDTO[]>;
};

export const fetchUpdateCourseById = async (courseId: number, courseDTO: CourseDTO): Promise<string> => {
    const response = await fetch(`http://localhost:3001/api/v1/courses/${courseId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(courseDTO),
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Aktualisieren des Kurses: ${response.status}`);
    }
    return response.text();
}

export const fetchRemoveCourseById = async (courseId: number): Promise<string> => {
    const response = await fetch(`http://localhost:3001/api/v1/courses/${courseId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Löschen des Kurses: ${response.status}`);
    }
    return response.text();
}

export const fetchCreateCourse = async (courseDTO: CourseDTO): Promise<string> => {
    const response = await fetch(`http://localhost:3001/api/v1/courses/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(courseDTO),
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Erstellen des Kurses: ${response.status}`);
    }
    return response.text();
}