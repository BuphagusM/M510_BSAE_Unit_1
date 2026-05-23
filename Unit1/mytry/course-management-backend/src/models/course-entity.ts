export interface CourseEntity {
    id: number;
    title: string;
    date: string;
    status: 'active' | 'inactive';
    description: string;
    instructor: string;
    capacity: number;
}
