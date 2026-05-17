// ui-data-controller.ts
import express from 'express';
import {getCourseById, getRemoveCourseById} from '../services/course-service';
import {getAllCoursesDto} from '../services/dto-service';

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

export const removeCourseById = (req: express.Request, res: express.Response) => {
    try {
        const courseId = req.params.courseId;
        const course = getCourseById(Number(courseId));
        if (!course) {
            const errMsg = `Kurs mit ID ${courseId} nicht gefunden`;
            console.warn(errMsg);
            return res.status(404).json({errMsg});
        }
        getRemoveCourseById(course.id);
        console.info(`Kurs mit ID ${courseId} gelöscht`); // Log-Ausgabe der Löschaktion
        return res.status(200).json({message: `Kurs mit ID ${courseId} gelöscht`});
    } catch (error) {
        const errMsg = 'Fehler beim Löschen des Kurses';
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}