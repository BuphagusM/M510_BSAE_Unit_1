import {useEffect, useState} from 'react';
import {ParticipantDTO} from '../model/participant-dto.ts';
import {
    fetchCreateParticipant,
    fetchParticipants,
    fetchRemoveParticipantById,
    fetchUpdateParticipantById
} from '../services/participants-data-http-request';

export const useParticipants = () => {
    const [participants, setParticipants] = useState<ParticipantDTO[]>([]);

    useEffect(() => {
        fetchParticipants()
            .then(data => setParticipants(data))
            .catch(err => console.error(err));
    }, []);

    const deleteParticipant = async (id: number): Promise<string> => {
        const message = await fetchRemoveParticipantById(id);
        setParticipants(prev => prev.filter(p => p.id !== id));
        return message;
    };

    const updateParticipant = async (updatedParticipant: ParticipantDTO): Promise<string> => {
        const message = await fetchUpdateParticipantById(updatedParticipant.id, updatedParticipant);
        setParticipants(prev => prev.map(p => p.id === updatedParticipant.id ? updatedParticipant : p));
        return message;
    };

    const createParticipant = async (participantDTO: ParticipantDTO): Promise<string> => {
        const message = await fetchCreateParticipant(participantDTO);
        const data = await fetchParticipants();
        setParticipants(data);
        return message;
    };


    return {participants, deleteParticipant, updateParticipant, createParticipant};
};