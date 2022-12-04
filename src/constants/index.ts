import { NavItem } from '@/types';

export const discoverNames = {
  POPULAR: 'popular',
  TOP_RATED: 'top_rated',
  UPCOMING: 'upcoming',
};

export const queryKeys = {
  DISCOVER_MOVIES: 'discover_movies',
  MOVIES: 'movies',
  MOVIE: 'movie',
  RECOMMENDED_MOVIES: 'recommended_movies',
  SEARCH_MOVIES: 'search_movies',
  GENRES: 'genres',
};

export const searchParamsKeys = {
  QUERY_TEXT: 'queryText',
};

export const MOVIE_SRC_BASE_PATH = 'https://image.tmdb.org/t/p/w342/';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Popular',
    href: 'discover/popular',
  },
  {
    label: 'Top Rated',
    href: 'discover/top_rated',
  },
  {
    label: 'Upcoming',
    href: 'discover/upcoming',
  },
  {
    label: 'Favorites',
    href: 'favorites',
  },
];
