export interface Testimonial {
  id: number;
  name: string;
  bandScore: string;
  role: string;
  imageUrl: string;
  avatarUrl: string;
  videoThumbnail: string;
}

export interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}