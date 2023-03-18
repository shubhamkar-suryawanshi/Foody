import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Restaurant from './Components/Restaurant';
import Shimmer from './Components/Shimmer';

import { Provider } from 'react-redux';
import store from './Shared/store';
import Cart from './Components/Cart';

const About = lazy(() => {
  return import('./Components/About');
});

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: '/restaurant/:resId',
        element: <Restaurant />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);
