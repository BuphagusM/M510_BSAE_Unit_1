import { CourseEntity } from "./course-entity";


export interface ParticipantDTO {
  id: number;
  name: string;
  email: string;
  coursesDetails: CourseEntity [];
  status: 'active' | 'inactive' | 'completed';
  enrollmentDate: string;
}
