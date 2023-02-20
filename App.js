import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <React.Fragment>
      <h1>Woow 😍</h1>
      <h2>This create react app is build by me 😎</h2>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
