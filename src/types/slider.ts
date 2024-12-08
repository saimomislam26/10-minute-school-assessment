export interface Student {
  id: number;
  name: string;
  bandScore: string;
  role: string;
  imageUrl: string;
  thumbnailUrl: string;
}

export interface SliderProps {
  students: Student[];
}