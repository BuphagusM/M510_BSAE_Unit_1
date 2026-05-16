import {getAllCourses} from './course-service';
import {getAllParticipants} from './participant-service';
import {ParticipantDTO} from '../models/participant-dto';
import {CourseDTO} from '../models/course-dto';
import {ParticipantEntity} from '../models/participant-entity';
import {CourseEntity} from '../models/course-entity';
import {getTotalParticipantsByCourseId} from '../repositories/participant-repository';
import {getCourseTitlesByIdsEntity} from '../repositories/course-repository';

export const getAllCoursesDto = (): CourseDTO[] => {
    const courses: CourseEntity[] = getAllCourses();
    return courses.map(course => ({
        id: course.id,
        title: course.title,
        date: course.date,
        status: course.status,
        description: course.description,
        instructor: course.instructor,
        capacity: course.capacity,
        participantsList: getTotalParticipantsByCourseId(course.id) // Hier wird eine Liste der Teilnehmer erstellt
    }));
};

export const getAllParticipantsDto = (): ParticipantDTO[] => {
    const participants: ParticipantEntity[] = getAllParticipants();
    return participants.map(participant => ({
        id: participant.id,
        name: participant.name,
        email: participant.email,
        coursesDetails: getCourseTitlesByIdsEntity([participant.courseId]), // Hier wird der Kursname anhand der Kurs-ID abgerufen
        status: participant.status,
        enrollmentDate: participant.enrollmentDate
    }));
};