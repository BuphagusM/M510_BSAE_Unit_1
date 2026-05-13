// course-repository.ts
import Database from 'better-sqlite3';
import path from 'path';
import { CourseEntity } from '../models/course-entity';

const db = new Database(path.join(__dirname, '../../data/courses.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    date TEXT,
    status TEXT check(status IN ('active', 'inactive')),
    description TEXT
  )
`);

// Testdaten nur einfügen wenn Tabelle leer ist
const count = (db.prepare('SELECT COUNT(*) as count FROM courses').get() as { count: number }).count;
if (count === 0) {
  const insert = db.prepare('INSERT INTO courses (title, date, status, description) VALUES (?, ?, ?, ?)');
  insert.run('React Grundlagen', '2024-05-01', 'active', 'Grundlagen von React.js');
  insert.run('TypeScript Grundlagen', '2024-05-15', 'active', 'Einführung in TypeScript');
  insert.run('Datenbanken mit SQL', '2024-05-20', 'inactive', 'Grundlagen von SQL und Datenbankdesign');
  insert.run('Frontend-Entwicklung mit Vue.js', '2024-06-01', 'active', 'Erstellung von Benutzeroberflächen mit Vue.js');
  insert.run('Node.js Einführung', '2024-06-01', 'inactive', 'Backend-Entwicklung mit Node.js');
  insert.run('Web APIs', '2024-06-15', 'active', 'Arbeit mit Fetch, DOM und LocalStorage');
}

export const getAllCoursesEntity = (): CourseEntity[] => {
  return db.prepare('SELECT * FROM courses').all() as CourseEntity[];
};

export const getCourseByIdEntity = (id: number): CourseEntity | undefined => {
  return db.prepare('SELECT * FROM courses WHERE id = ?').get(id) as CourseEntity | undefined;
};

export default db;

