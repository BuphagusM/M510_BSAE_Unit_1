// server.ts
import express from 'express';
import cors from 'cors';
import {getDashboardDetailsInfo} from './controllers/dashboards-controller';
import {getAllCoursesDTOHandler} from './controllers/courses-controller';
import {getAllParticipantsDTOHandler} from './controllers/ui-data-controller';

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
app.get(apiVersion + '/courses', getAllCoursesDTOHandler);

// Teilnehmer-Endpunkte
app.get(apiVersion + '/participants', getAllParticipantsDTOHandler);


app.listen(3001, () => {
    console.log('Server läuft auf http://localhost:3001');
});
