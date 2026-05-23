// participant-repository.ts
import Database from 'better-sqlite3';
import path from 'path';
import {ParticipantEntity} from '../models/participant-entity';
import {ParticipantDTO} from "../models/participant-dto";

const db = new Database(path.join(__dirname, '../../data/participants.db'));

db.exec(`
    CREATE TABLE IF NOT EXISTS participants
    (
        id             INTEGER PRIMARY KEY AUTOINCREMENT,
        name           TEXT NOT NULL,
        email          TEXT,
        courseId       INTEGER,
        status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'completed')),
        enrollmentDate TEXT
    )
`);

const count = (db.prepare('SELECT COUNT(*) as count FROM participants').get() as { count: number }).count;
if (count === 0) {
    const insert = db.prepare('INSERT INTO participants (name, email, courseId, status, enrollmentDate) VALUES (?, ?, ?, ?, ?)');
    insert.run('Anna Mueller', 'anna.mueller@example.com', 1, 'active', '2024-02-15');
    insert.run('Benjamin Schmidt', 'benjamin.schmidt@example.com', 1, 'active', '2024-02-16');
    insert.run('Clara Wagner', 'clara.wagner@example.com', 2, 'completed', '2024-03-01');
    insert.run('David Bauer', 'david.bauer@example.com', 2, 'active', '2024-03-05');
    insert.run('Emma Klein', 'emma.klein@example.com', 3, 'inactive', '2024-01-20');
    insert.run('Florian Weber', 'florian.weber@example.com', 4, 'active', '2024-04-10');
    insert.run('Greta Fischer', 'greta.fischer@example.com', 1, 'active', '2024-02-20');
    insert.run('Heinrich Keller', 'heinrich.keller@example.com', 5, 'inactive', '2024-05-15');
}

export const getAllParticipantsEntity = (): ParticipantEntity[] => {
    return db.prepare('SELECT * FROM participants').all() as ParticipantEntity[];
};

export const getTotalParticipantsByCourseId = (courseId: number): ParticipantEntity[] => {
    return db.prepare('SELECT * FROM participants WHERE courseId = ?').all(courseId) as ParticipantEntity[];
}

export const getParticipantByIdEntity = (id: number): ParticipantEntity | undefined => {
    return db.prepare('SELECT * FROM participants WHERE id = ?').get(id) as ParticipantEntity | undefined;
};

export const getParticipantsCountByStatusEntity = (status: 'active' | 'inactive' | 'completed'): number => {
    const row = db.prepare('SELECT COUNT(*) as count FROM participants WHERE status = ?').get(status) as {
        count: number
    };
    return row.count;
}

export const getParticipantsCountProCourseEntity = (courseId: number): number => {
    const row = db.prepare('SELECT COUNT(*) as count FROM participants WHERE courseId = ?').get(courseId) as {
        count: number
    };
    return row.count;
}


export function removeParticipantByIdEntity(id: number) {
    return db.prepare('DELETE FROM participants WHERE id = ?').run(id);

}

export function updateParticipantByIdEntity(id: number, participantDTO: ParticipantDTO) {
    return db.prepare('UPDATE participants SET name = ?, email = ?, status = ?, enrollmentDate = ? WHERE id = ?')
        .run(participantDTO.name, participantDTO.email, participantDTO.status, participantDTO.enrollmentDate, id);
}

export function createParticipantEntity(participantDTO: ParticipantDTO) {
    return db.prepare('INSERT INTO participants (name, email, status, enrollmentDate) VALUES (?, ?, ?, ?)')
        .run(participantDTO.name, participantDTO.email, participantDTO.status, participantDTO.enrollmentDate);
}


export default db

