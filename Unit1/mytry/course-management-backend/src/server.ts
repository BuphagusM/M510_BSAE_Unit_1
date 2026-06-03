// server.ts
import express from 'express';
import cors from 'cors';
import coursesController from './controllers/courses-controller';
import participantsController from './controllers/participants-controller';
import dashboardController from './controllers/dashboards-controller';

const app = express();
const REQURL = "http://localhost:"
const PORT = 3001
const apiVersion = '/api/v1'

// Todo kommt später zum Einsatz für Dev API's
const apiKeyMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const clientKey = req.headers['x-api-key'];
    if (clientKey !== "ClientKeyInDotEnvEintragen") {
        return res.status(401).json({error: 'Unauthorized: Ungültiger API-Key'});
    }
    next();
};


app.use(cors({origin: REQURL + PORT}));
app.use(express.json());


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
app.use(apiVersion + '/dashboard', dashboardController);

// Kurs-Endpunkte
app.use(apiVersion + '/courses', coursesController);

// Teilnehmer-Endpunkte
app.use(apiVersion + '/participants', participantsController);


app.listen(PORT, () => {
    console.log(`Server läuft auf ${REQURL}${PORT}`);
});
