import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/utils/store';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Error from './src/components/Error';
import About from './src/components/About';
import Contact from './src/components/Contact';
import MenuList from './src/components/MenuList';

const App = () => {
  return (
    <div className="flex flex-col gap-8">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/menu/:resID', element: <MenuList /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
