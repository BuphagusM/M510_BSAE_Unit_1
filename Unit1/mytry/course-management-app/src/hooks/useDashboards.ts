import {useEffect, useState} from 'react';
import {DashboarDetailsInfo} from '../model/dashboar-details-info';
import {fetchDashboardDetailInfo} from '../services/dashboard-data-http-request.ts';

export const useDashboardDetailInfo = () => {
    const [dashboardDetailInfo, setDashboardDetailInfo] = useState<DashboarDetailsInfo>();

    useEffect(() => {
        fetchDashboardDetailInfo()
            .then(info => setDashboardDetailInfo(info))
            .catch(err => console.error(err));
    }, []);
    return dashboardDetailInfo;
}