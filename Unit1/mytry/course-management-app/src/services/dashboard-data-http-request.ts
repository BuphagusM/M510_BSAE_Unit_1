// courses-data-http-request.ts
import {DashboarDetailsInfo} from "../model/dashboar-details-info.ts";

export const fetchDashboardDetailInfo = async (): Promise<DashboarDetailsInfo> => {
    const response = await fetch(`http://localhost:3001/api/v1/dashboard/details`);
    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Dashboard-Details: ${response.status}`);
    }
    return response.json() as Promise<DashboarDetailsInfo>;
}