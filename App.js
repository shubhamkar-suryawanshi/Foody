import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/Components/Body';
import Footer from './src/Components/Footer';
import Header from './src/Components/Header';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
