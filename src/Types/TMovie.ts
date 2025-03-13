export type TMovie = {
  id: string;
  adult: boolean;
  poster_path: string;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  tagline: string;
  spoken_languages: {
    name: string;
  }[];
  genres: {
    name: string;
  }[];
  revenue: number;
};
