import { ParticipantEntity } from "./participant-entity";

export interface CourseDTO {
  id: number;
  title: string;
  date: string;
  status: 'active' | 'inactive';
  description: string;
  instructor: string;
  capacity: number;
  participantsList: ParticipantEntity [];
}
