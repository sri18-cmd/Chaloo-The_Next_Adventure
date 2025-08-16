
import { User } from 'firebase/auth';

export interface Review {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DestinationImage {
  url: string;
  width: number;
  height: number;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  brief: string;
  images: DestinationImage[];
  rating: number;
  pricePerNight: number;
  reviews: Review[];
  tags?: string[];
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
}
