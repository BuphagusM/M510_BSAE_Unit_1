export interface Participant {
  id: number;
  name: string;
  email: string;
  courseId: number; // IDs der Kurse, an denen der Teilnehmer teilnimmt
  status: 'active' | 'inactive' | 'enrolled'; // Status des Teilnehmers
}
