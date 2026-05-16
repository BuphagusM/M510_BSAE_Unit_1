// course-repository.ts
import Database from 'better-sqlite3';
import path from 'path';
import { CourseEntity } from '../models/course-entity';

const db = new Database(path.join(__dirname, '../../data/courses.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS courses
  (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT,
    date        TEXT,
    status      TEXT check (status IN ('active', 'inactive')),
    description TEXT,
    instructor  TEXT,
    capacity    INTEGER
  )
`);

// Testdaten nur einfügen wenn Tabelle leer ist
const count = (db.prepare('SELECT COUNT(*) as count FROM courses').get() as { count: number }).count;
if (count === 0) {
  const insert = db.prepare('INSERT INTO courses (title, date, status, description, instructor, capacity) VALUES (?, ?, ?, ?, ?, ?)');
  insert.run('React Grundlagen', '2024-03-15', 'active', 'Einführung in React und funktionale Komponenten', 'Prof. Meyer', 30);
  insert.run('JavaScript Fortgeschrittene', '2024-04-20', 'active', 'Asynchrone Programmierung und APIs', 'Prof. Schmidt', 25);
  insert.run('CSS und responsive Design', '2024-02-10', 'inactive', 'Modernes CSS mit Flexbox und Grid', 'Prof. Wagner', 35);
  insert.run('Web APIs', '2024-05-05', 'active', 'Arbeit mit Fetch, DOM und LocalStorage', 'Prof. Bauer', 28);
  insert.run('Node.js Einführung', '2024-06-01', 'inactive', 'Backend-Entwicklung mit Node.js', 'Prof. Klein', 20);
}

// Alle Kurse abrufen nach status und Datum sortiert
export const getAllCoursesEntity = (): CourseEntity[] => {
  return db.prepare('SELECT * FROM courses ORDER BY status, date').all() as CourseEntity[];
};

export const getCourseByIdEntity = (id: number): CourseEntity | undefined => {
  return db.prepare('SELECT * FROM courses WHERE id = ?').get(id) as CourseEntity | undefined;
};

export const getCourseCountByStatusEntity = (status: 'active' | 'inactive'): number => {
  const row = db.prepare('SELECT COUNT(*) as count FROM courses WHERE status = ?').get(status) as { count: number };
  return row.count;
};

export const getCourseTitlesByIdsEntity = (courseIds: number[]): CourseEntity[] => {
  return db.prepare('SELECT * FROM courses WHERE id IN (' + courseIds.join(',') + ')').all() as CourseEntity[];
};

export default db;

