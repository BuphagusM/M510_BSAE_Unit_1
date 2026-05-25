import {useEffect, useState} from 'react';
import {ParticipantDTO} from '../model/participant-dto.ts';
import {fetchParticipants, fetchCreateParticipant, fetchRemoveParticipantById, fetchUpdateParticipantById} from '../services/participants-data-http-request';
import {ParticipantEntity} from "../model/participant-entity.ts";

export const useParticipants = () => {
    const [participants, setParticipants] = useState<ParticipantDTO[]>([]);

    useEffect(() => {
        fetchParticipants()
            .then(data => setParticipants(data))
            .catch(err => console.error(err));
    }, []);

    const deleteParticipant = async (id: number): Promise<void> => {
        await fetchRemoveParticipantById(id);
        setParticipants(prev => prev.filter(p => p.id !== id));

    };

    const updateParticipant = async (updatedParticipant: ParticipantDTO): Promise<void> => {
        await fetchUpdateParticipantById(updatedParticipant.id, updatedParticipant);
        setParticipants(prev => prev.map(p => p.id === updatedParticipant.id ? updatedParticipant : p));
    };

    const createParticipant = async (participantDTO: ParticipantDTO): Promise<void> => {
        await fetchCreateParticipant(participantDTO);
        fetchParticipants()
            .then(data => setParticipants(data))
            .catch(err => console.error(err));
    };


    return {participants, deleteParticipant, updateParticipant, createParticipant};
};