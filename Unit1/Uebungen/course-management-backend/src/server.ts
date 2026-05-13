// server.ts
import express from 'express';
import cors from 'cors';
import { getAllCoursesHandler, getCourseByIdHandler, getAllParticipantsHandler, getParticipantByIdHandler } from './controllers/ui-data-controller';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/courses', getAllCoursesHandler);
app.get('/courses/:id', getCourseByIdHandler);

app.get('/participants', getAllParticipantsHandler);
app.get('/participants/:id', getParticipantByIdHandler);

app.listen(3001, () => {
  console.log('Server läuft auf http://localhost:3001');
});
