// ui-data-controller.ts
import express from 'express';
import {getAllCourses, getCourseById, getCourseCountByStatus} from '../services/course-service';
import {getAllParticipants, getParticipantById, getParticipantCountByStatus} from '../services/participant-service';
import {getAllCoursesDto, getAllParticipantsDto} from '../services/dto-service';
import {DashboarDetailsInfo} from "../models/dashboar-details-info";

// Dashboard-Handler

export const getDashboardDetailsInfo = (req: express.Request, res: express.Response) => {
    try {
        const dashboardDetailsInfo: DashboarDetailsInfo = {
            totalActiveCourses: getCourseCountByStatus('active'),
            totalCourses: getAllCourses().length,
            totalParticipants: getAllParticipants().length,
            totalActiveParticipants: getParticipantCountByStatus('active'),
        };
        console.info(`Dashboard-Details abgerufen: ${JSON.stringify(dashboardDetailsInfo)}`); // Log-Ausgabe der Dashboard-Details
        return res.status(200).json(dashboardDetailsInfo);
    } catch (error) {
        const errMsg = 'Fehler beim Abrufen der Dashboard-Details'
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}