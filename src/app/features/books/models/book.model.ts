import { Author } from '../../authors/models/author.model';
import { Genre } from '../../genres/models/genre.model';
import { Publisher } from '../../publishers/models/publisher.model';

export interface Book {
  id: string;
  title: string;
  description: string;
  genre: Genre;
  publisher: Publisher;
  authors: Author[];
  cover: string;
  ISBN10: string;
  ISBN13: string;
  retailPrice: number;
  retailPriceCurrency: string;
  averageRating: number;
  ratingsCount: number;
  language: string;
}
