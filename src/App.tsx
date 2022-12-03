import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import MovieDetailPage from '@/pages/MovieDetail/MovieDetailPage';
import ErrorPage from '@/pages/ErrorPage';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { routes } from '@/routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/${routes.movieDetails}/:id`,
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
