import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import DiscoverPage from '@/pages/DiscoverPage/DiscoverPage';
import MovieDetailPage from '@/pages/MovieDetailPage/MovieDetailPage';
import SearchPage from '@/pages/SearchPage/SearchPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ErrorPage from '@/pages/ErrorPage';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { routes } from '@/routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Navigate to={`${routes.discover}/popular`} />,
    errorElement: <ErrorPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: `${routes.discover}/:name`,
        element: <DiscoverPage />,
      },
      {
        path: `${routes.movieDetails}/:id`,
        element: <MovieDetailPage />,
      },
      {
        path: routes.searchMovies,
        element: <SearchPage />,
      },
      {
        path: routes.favoriteMovies,
        element: <FavoritesPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
