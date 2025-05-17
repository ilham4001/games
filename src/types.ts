export interface Game {
  id: number;
  name: string;
  image: string;
  rating: number;
  size: string;
  downloads: string;
  platforms: ('android' | 'ios')[];
  isAdult?: boolean;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}