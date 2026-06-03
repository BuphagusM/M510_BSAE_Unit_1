// dashboards-controller.ts
import express, { Request, Response } from 'express';
import {getAllCourses, getCourseCountByStatus} from '../services/course-service';
import {getAllParticipants, getParticipantCountByStatus} from '../services/participant-service';
import {DashboarDetailsInfo} from "../models/dashboar-details-info";

const router = express.Router();


// Dashboard-Handler
router.get('/dashboard/details', (req: Request, res: Response) => {
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
})

export default router;
