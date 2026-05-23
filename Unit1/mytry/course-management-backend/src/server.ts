// server.ts
import express from 'express';
import cors from 'cors';
import {getDashboardDetailsInfo} from './controllers/dashboards-controller';
import * as coursesController from './controllers/courses-controller';
import * as participantsController from './controllers/participants-controller';

const app = express();

// Todo kommt später zum Einsatz für Dev API's
const apiKeyMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const clientKey = req.headers['x-api-key'];
    if (clientKey !== "ClientKeyInDotEnvEintragen") {
        return res.status(401).json({error: 'Unauthorized: Ungültiger API-Key'});
    }
    next();
};


app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
const apiVersion = '/api/v1'

/* 
* UI-Endpunkte
*/
/** ClientKey als Endpunkte Schutz.
 * Alle Endpunkte per ClientKey schützen
 *  app.use(apiKeyMiddleware); // vor allen Routen
 *
 *  Oder einzelne Endpunkte schüzten
 *  app.get(apiVersion + '/dashboard/details', apiKeyMiddleware, getDashboardDetailsInfo);
 */
// ungeschützt da für UI ClientKey nicht geeignet ist:
app.get(apiVersion + '/dashboard/details', getDashboardDetailsInfo);

// Kurs-Endpunkte
app.get(apiVersion + '/courses', coursesController.getAllCoursesDTOHandler);
app.delete(apiVersion + '/courses/:courseId', coursesController.removeCourseById)
app.put(apiVersion + '/courses/:courseId', coursesController.updateCourseById)
app.post(apiVersion + '/courses/create', coursesController.createCourse)

// Teilnehmer-Endpunkte
app.get(apiVersion + '/participants', participantsController.getAllParticipantsDTOHandler);
app.delete(apiVersion + '/participants/:participantId', participantsController.removeParticipantById)
app.put(apiVersion + '/participants/:participantId', participantsController.updateParticipantById)
app.post(apiVersion + '/participants/create', participantsController.createParticipant)


app.listen(3001, () => {
    console.log('Server läuft auf http://localhost:3001');
});
