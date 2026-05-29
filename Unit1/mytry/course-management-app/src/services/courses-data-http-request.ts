// courses-data-http-request.ts
import {CourseDTO} from '../model/course-dto.ts';


export const fetchCourses = async (): Promise<CourseDTO[]> => {
    const response = await fetch('http://localhost:3001/api/v1/courses');
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Kurse: ${response.status}`);
    }
    return response.json() as Promise<CourseDTO[]>;
};

const parseResponseMessage = async (response: Response): Promise<string> => {
    const text = await response.text();
    try {
        const parsed = JSON.parse(text);
        return parsed.message ?? text;
    } catch {
        return text;
    }
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
    return parseResponseMessage(response);
}

export const fetchRemoveCourseById = async (courseId: number): Promise<string> => {
    const response = await fetch(`http://localhost:3001/api/v1/courses/${courseId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Löschen des Kurses: ${response.status}`);
    }
    return parseResponseMessage(response);
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
    return parseResponseMessage(response);
}