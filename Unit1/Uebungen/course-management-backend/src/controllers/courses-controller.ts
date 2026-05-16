// ui-data-controller.ts
import express from 'express';
import {getAllCourses, getCourseById, getCourseCountByStatus} from '../services/course-service';
import {getAllParticipants, getParticipantById, getParticipantCountByStatus} from '../services/participant-service';
import {getAllCoursesDto, getAllParticipantsDto} from '../services/dto-service';
import {DashboarDetailsInfo} from "../models/dashboar-details-info";

// Kurs-Handler
export const getAllCoursesDTOHandler = (req: express.Request, res: express.Response) => {
    try {
        const coursesDTO = getAllCoursesDto();
        console.info('Kursdaten abgerufen: ', coursesDTO); // Log-Ausgabe der Kursdaten
        return res.status(200).json(coursesDTO);
    } catch (error) {
        const errMsg = 'Fehler beim Abrufen der Kursdaten'
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
};
