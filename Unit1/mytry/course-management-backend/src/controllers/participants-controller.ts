// participants-controller.ts
import express from 'express';
import {getAllParticipantsDto} from '../services/dto-service';
import {ParticipantEntity} from "../models/participant-entity";
import {
    getCreateParticipant,
    getParticipantById,
    getRemoveParticipantById,
    getUpdateParticipantById
} from "../services/participant-service";
import {ParticipantDTO} from "../models/participant-dto";

// Teilnehmer-Handler

export const getAllParticipantsDTOHandler = (req: express.Request, res: express.Response) => {
    try {
        const participantsDTO = getAllParticipantsDto();
        console.info('Teilnehmerdaten abgerufen: ', participantsDTO.length)
        return res.status(200).json(participantsDTO);
    } catch (error) {
        const errMsg = 'Fehler beim Abruf der Teilnehmerdaten'
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
};

export const removeParticipantById = (req: express.Request, res: express.Response) => {
    try {
        const participantId = req.params.participantId;
        const participant = getParticipantById(Number(participantId)) as ParticipantEntity;
        if (!participant) {
            const errMsg = `Teilnehmer mit ID ${participantId} nicht gefunden`;
            console.warn(errMsg);
            return res.status(404).json({errMsg});
        }
        getRemoveParticipantById(participant.id);
        console.info(`Teilnehmer mit ID ${participantId} gelöscht`); // Log-Ausgabe der Löschaktion
        return res.status(200).json({message: `Teilnehmer mit ID ${participantId} gelöscht`});
    } catch (error) {
        const errMsg = 'Fehler beim Löschen des Teilnehmers';
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}

export const updateParticipantById = (req: express.Request, res: express.Response) => {
    try {
        const participantId = req.params.participantId;
        const participantsDto : ParticipantDTO = req.body;
        const participant = getParticipantById(Number(participantId)) as ParticipantEntity;
        if (!participant) {
            const errMsg = `Teilnehmer ${participantsDto.name} mit ID ${participantId} nicht gefunden`;
            console.warn(errMsg);
            return res.status(404).json({errMsg});
        }
        if (participantId === participantsDto.id.toString()) {
            getUpdateParticipantById(participant.id, participantsDto)
            console.info(`Teilnehmer ${participant.name} mit ID ${participantId} aktualisiert`); // Log-Ausgabe der Aktualisierungsaktion
            return res.status(200).json({message: `Teilnehmer ${participantsDto.name} mit ID ${participantId} aktualisiert`});
        }
    } catch (error) {
        const errMsg = 'Fehler beim Aktualisieren des Teilnehmers';
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}

export const createParticipant = (req: express.Request, res: express.Response) => {
    try {
        const participantDTO: ParticipantDTO = req.body;
        if (participantDTO.name && participantDTO.email) {
            const newParticipantsId = getCreateParticipant(participantDTO).lastInsertRowid;
            console.info(`Teilnehmer ${participantDTO.name} mit ID ${newParticipantsId} erstellt`); // Log-Ausgabe der Erstellung
            return res.status(201).json({message: `Teilnehmer mit ID ${newParticipantsId} erstellt`});
        } else {
            const errMsg = 'Ungültige Teilnehmerdaten: Name und E-Mail sind erforderlich';
            console.warn(errMsg);
            return res.status(400).json({errMsg});
        }
    } catch
        (error) {
        const errMsg = 'Fehler beim Erstellen des Teilnehmers';
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}