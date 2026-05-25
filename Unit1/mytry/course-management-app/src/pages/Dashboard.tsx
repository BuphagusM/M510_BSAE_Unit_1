import React from 'react'
import {useCourses} from '../hooks/useCourses'
import {useDashboardDetailInfo} from '../hooks/useDashboards.ts'
import {Card, CardContent, Stack, Typography} from '@mui/material';

function Dashboard(): React.ReactElement {
    const {courses} = useCourses();
    const dashboardDetailInfo = useDashboardDetailInfo()
    // Struktur aus den Dashboard-Detailinformationen erstellen, um die Anzeige zu erleichtern
    const stats = [
        {
            value: dashboardDetailInfo?.totalCourses,
            label: "Gesamtkurse",
        },
        {
            value: dashboardDetailInfo?.totalActiveCourses,
            label: "Aktive Kurse",
        },
        {
            value: dashboardDetailInfo?.totalParticipants,
            label: "Teilnehmende",
        },
        {
            value: dashboardDetailInfo?.totalActiveParticipants,
            label: "Aktive Teilnehmende",
        },
    ];

    return (
        <Stack>
            <h1 className="page-title">Dashboard</h1>

            <Stack direction="row" spacing={3}>
                {/* eine Card designen und die Werte aus den Dashboard-Detailinformationen anzeigen */}
                {stats.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 300,
                            minHeight: 150,
                            backgroundColor: "#f5f5f5",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography variant="h4">{item.value}</Typography>

                            <Typography variant="h6" color="text.secondary">
                                {item.label || 0}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Typography variant="h5" component="div" sx={{mt: 4, mb: 2, color: '#2c3e50'}}>
                Aktuelle Kurse
            </Typography>

            <Stack direction="row" spacing={3}>
                {courses
                    .filter(course => course.status === 'active')
                    .map(course => (
                        <Card key={course.id} sx={{width: 300, minHeight: 150}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {course.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Datum:</strong> {new Date(course.date).toLocaleDateString('de-DE')}
                                </Typography>
                                <Typography variant="body2" color="text.primary" sx={{mb: 2}}>
                                    {course.description}
                                </Typography>
                                <Typography variant="body2"
                                            className={course.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'}>
                                    {course.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </Stack>

            <Typography variant="h5" component="div" sx={{mt: 4, mb: 2, color: '#2c3e50'}}>
                Übersicht
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{lineHeight: '1.8'}}>
                Diese Dashboard-Seite zeigt eine Übersicht der Kursverwaltungs-App.
                Sie können die verfügbaren Navigationspunkte nutzen, um zu den Kursen oder Teilnehmenden zu navigieren.
            </Typography>
        </Stack>
    )
}

export default Dashboard
