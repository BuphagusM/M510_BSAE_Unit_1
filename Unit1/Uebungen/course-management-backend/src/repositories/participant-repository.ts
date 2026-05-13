// participant-repository.ts
import Database from 'better-sqlite3';
import path from 'path';
import { ParticipantEntity } from '../models/participant-entity';

const db = new Database(path.join(__dirname, '../../data/participants.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS participants (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    name     TEXT    NOT NULL,
    email    TEXT,
    courseId INTEGER,
    status   TEXT    NOT NULL DEFAULT 'active' CHECK(status IN ('active', 'inactive', 'enrolled'))
  )
`);

const count = (db.prepare('SELECT COUNT(*) as count FROM participants').get() as { count: number }).count;
if (count === 0) {
  const insert = db.prepare('INSERT INTO participants (name, email, courseId, status) VALUES (?, ?, ?, ?)');
  insert.run('Anna Mueller', 'anna.mueller@example.com', 1, 'active');
  insert.run('Benjamin Schmidt', 'benjamin.schmidt@example.com', 2, 'enrolled');
  insert.run('Clara Wagner', 'clara.wagner@example.com', 3, 'inactive');
  insert.run('David Bauer', 'david.bauer@example.com', 4, 'active');
  insert.run('Emma Klein', 'emma.klein@example.com', 5, 'enrolled');
  insert.run('Florian Weber', 'florian.weber@example.com', 6, 'inactive');
  insert.run('Greta Fischer', 'greta.fischer@example.com', 1, 'active');
  insert.run('Heinrich Keller', 'heinrich.keller@example.com', 2, 'enrolled');
}

export const getAllParticipantsEntity = (): ParticipantEntity[] => {
  return db.prepare('SELECT * FROM participants').all() as ParticipantEntity[];
};

export const getParticipantByIdEntity = (id: number): ParticipantEntity | undefined => {
  return db.prepare('SELECT * FROM participants WHERE id = ?').get(id) as ParticipantEntity | undefined;
};


const getAllParticipants = db.prepare('SELECT * FROM participants').all;
const getAllParticipantsByCourseId = db.prepare('SELECT * FROM participants WHERE courseId = ?').all;
const getParticipantById = db.prepare('SELECT * FROM participants WHERE id = ?').get;


export default db

