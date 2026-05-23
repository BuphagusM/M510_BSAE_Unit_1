// participants-data-http-request.ts
import {ParticipantDTO} from '../model/participant-dto.ts';

export const fetchParticipants = async (): Promise<ParticipantDTO[]> => {
    const response = await fetch('http://localhost:3001/api/v1/participants');
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Teilnehmer: ${response.status}`);
    }
    return response.json() as Promise<ParticipantDTO[]>;
};
