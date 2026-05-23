// participants-controller.ts
import express from 'express';
import {getCourseById, getcreateCourse, getRemoveCourseById, getUpdateCourseById} from '../services/course-service';
import {getAllCoursesDto} from '../services/dto-service';
import {CourseEntity} from "../models/course-entity";
import {CourseDTO} from "../models/course-dto";

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

export const updateCourseById = (req: express.Request, res: express.Response) => {
    try {
        const courseId = req.params.courseId;
        const courseDto : CourseDTO = req.body;
        if (courseId === courseDto.id.toString()) {
            getUpdateCourseById(courseDto.id, courseDto);
            console.info(`Kurs mit ID ${courseId} aktualisiert`); // Log-Ausgabe der Aktualisierungsaktion
            return res.status(200).json({message: `Kurs mit ID ${courseId} aktualisiert`});
        }else {
            const errMsg = `Kurs-ID im Pfad (${courseId}) stimmt nicht mit ID im Body (${courseDto.id}) überein`;
            console.warn(errMsg);
            return res.status(400).json({errMsg});
        }
    } catch (error) {
        const errMsg = 'Fehler beim Aktualisieren des Kurses';
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}

export const createCourse = (req: express.Request, res: express.Response) => {
    try {
        const courseDTO: CourseDTO = req.body;
        // Wenn der Body in eine CoursesEntetiy gemappt werden kann
        if (courseDTO.title && courseDTO.status) {
            const result = getcreateCourse(courseDTO).lastInsertRowid;
            console.info(`Kurs mit ID ${result} erstellt`); // Log-Ausgabe der Erstellung
            return res.status(201).json({message: `Kurs mit ID ${result} erstellt`});
        } else {
            const errMsg = 'Ungültige Kursdaten im Request-Body';
            console.warn(errMsg);
            return res.status(400).json({errMsg});
        }
    } catch (error) {
        const errMsg = 'Fehler beim Erstellen des Kurses';
        console.error(error, errMsg);
        return res.status(500).json({errMsg});
    }
}