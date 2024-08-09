import { createBrowserRouter } from 'react-router-dom';
import { CartPage, HomePage, NotFoundPage, SuccessPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
