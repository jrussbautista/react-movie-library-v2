import { NavItem } from '@/types';

export const queryKeys = {
  MOVIES: 'movies',
  MOVIE: 'movie',
};

export const MOVIE_SRC_BASE_PATH = 'https://image.tmdb.org/t/p/w342/';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Popular',
  },
  {
    label: 'Top Rated',
  },
  {
    label: 'Upcoming',
    href: '#',
  },
  {
    label: 'Favorites',
    href: '#',
  },
];
