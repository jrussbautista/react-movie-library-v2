export type Genre = {
  id: number;
  name: string;
};

export type Country = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  countries: Country[];
  runtime: string;
};

export type NavItem = {
  label: string;
  href?: string;
};
