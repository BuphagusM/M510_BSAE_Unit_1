import { useEffect, useState } from 'react';
import { Participant } from '../model/participant';
import { fetchParticipants } from '../services/participants-data-http-request';

export const useParticipants = () => {
    const [participants, setParticipants] = useState<Participant[]>([]);

    useEffect(() => {
        fetchParticipants()
            .then(data => setParticipants(data))
            .catch(err => console.error(err));
    }, []);

    return { participants};
};
