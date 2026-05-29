// participants-data-http-request.ts
import {ParticipantDTO} from '../model/participant-dto.ts';

const parseResponseMessage = async (response: Response): Promise<string> => {
    const text = await response.text();
    try {
        const parsed = JSON.parse(text);
        return parsed.message ?? text;
    } catch {
        return text;
    }
};

export const fetchParticipants = async (): Promise<ParticipantDTO[]> => {
    const response = await fetch('http://localhost:3001/api/v1/participants');
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Teilnehmer: ${response.status}`);
    }
    return response.json() as Promise<ParticipantDTO[]>;
};

export const fetchRemoveParticipantById = async (id: number): Promise<string> => {
    const response = await fetch(`http://localhost:3001/api/v1/participants/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Löschen des Teilnehmers: ${response.status}`);
    }
    return parseResponseMessage(response);
};

export const fetchUpdateParticipantById = async (id: number, updatedParticipant: ParticipantDTO): Promise<string> => {
    const response = await fetch(`http://localhost:3001/api/v1/participants/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedParticipant)
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Aktualisieren des Teilnehmers: ${response.status}`);
    }
    return parseResponseMessage(response);
};

export const fetchCreateParticipant = async (participantDTO: ParticipantDTO): Promise<string> => {
    const response = await fetch('http://localhost:3001/api/v1/participants/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(participantDTO)
    });
    if (!response.ok) {
        throw new Error(`Fehler beim Erstellen des Teilnehmers: ${response.status}`);
    }
    return parseResponseMessage(response);
};
