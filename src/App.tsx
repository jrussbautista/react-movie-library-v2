import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import MovieDetailPage from '@/pages/MovieDetail/MovieDetailPage';
import ErrorPage from '@/pages/ErrorPage';
import MainLayout from '@/layouts/MainLayout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movie/:id',
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
