// participants-data-http-request.ts
import { Participant } from '../model/participant';

export const fetchParticipants = async (): Promise<Participant[]> => {
  const response = await fetch('http://localhost:3001/participants');
  if (!response.ok) {
    throw new Error(`Fehler beim Laden der Kurse: ${response.status}`);
  }
  return response.json() as Promise<Participant[]>;
};
