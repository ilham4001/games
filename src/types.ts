export interface Game {
  id: number;
  name: string;
  image: string;
  rating: number;
  size: string;
  downloads: string;
  platforms: ('android' | 'ios')[];
  isAdult?: boolean;
  description?: string;
  features?: string[];
}