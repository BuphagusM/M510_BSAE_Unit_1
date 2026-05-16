// ui-data-controller.ts
import express from 'express';
import {getAllParticipantsDto} from '../services/dto-service';

// Teilnehmer-Handler

export const getAllParticipantsDTOHandler = (req: express.Request, res: express.Response) => {
    try {
        const participantsDTO = getAllParticipantsDto();
        console.info('Teilnehmerdaten abgerufen: ', participantsDTO)
        return res.status(200).json(participantsDTO);
    } catch (error) {
        const errMsg = 'Fehler beim Abruf der Teilnehmerdaten'
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
};
