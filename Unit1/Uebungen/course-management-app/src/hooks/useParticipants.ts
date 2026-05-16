import {useEffect, useState} from 'react';
import {ParticipantDTO} from '../model/participant-dto.ts';
import {fetchParticipants} from '../services/participants-data-http-request';

export const useParticipants = () => {
    const [participants, setParticipants] = useState<ParticipantDTO[]>([]);

    useEffect(() => {
        fetchParticipants()
            .then(data => setParticipants(data))
            .catch(err => console.error(err));
    }, []);

    return {participants};
};