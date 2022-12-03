import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import MovieDetailPage from '@/pages/MovieDetailPage/MovieDetailPage';
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
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
