// ui-data-controller.ts
import express from 'express';
import { getAllCourses, getCourseById } from '../services/course-service';
import { getAllParticipants, getParticipantById } from '../services/participant-service';

export const getAllCoursesHandler = (req: express.Request, res: express.Response) => {
  const courses = getAllCourses();
  res.json(courses);
};

export const getCourseByIdHandler = (req: express.Request, res: express.Response) => {
  const id = parseInt(req.params.id);
  const course = getCourseById(id);
  if (!course) {
    res.status(404).json({ message: 'Course not found' });
    return;
  }
  res.json(course);
};

export const getAllParticipantsHandler = (req: express.Request, res: express.Response) => {
  const participants = getAllParticipants();
  res.json(participants);
};

export const getParticipantByIdHandler = (req: express.Request, res: express.Response) => {
  const id = parseInt(req.params.id);
  const participant = getParticipantById(id);
  if (!participant) {
    res.status(404).json({ message: 'Participant not found' });
    return;
  }
  res.json(participant);
};