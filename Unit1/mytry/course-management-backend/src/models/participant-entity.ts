export interface ParticipantEntity {
    id: number;
    name: string;
    email: string;
    courseId: number;
    status: 'active' | 'inactive' | 'completed';
    enrollmentDate: string;
}
