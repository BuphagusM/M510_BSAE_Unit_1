export interface Course {
  id: number;
  title: string;
  date: string;
  status: 'active' | 'inactive';
  description: string;
}