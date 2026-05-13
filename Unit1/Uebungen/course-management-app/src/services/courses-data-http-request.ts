// courses-data-http-request.ts
import { Course } from '../model/course';


export const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch('http://localhost:3001/courses');
  if (!response.ok) {
    throw new Error(`Fehler beim Laden der Kurse: ${response.status}`);
  }
  return response.json() as Promise<Course[]>;
};


export const fetchCourseById = async (id: number): Promise<Course> => {
  const response = await fetch(`http://localhost:3001/courses/${id}`);
  if (!response.ok) {
    throw new Error(`Fehler beim Laden des Kurses mit ID ${id}: ${response.status}`);
  }
  return response.json() as Promise<Course>;
}