import React from 'react';

const Pegination = ({ totalCards, cardsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center ">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="w-10 py-2 px-4 m-4 cursor-pointer bg-green-300 shadow-slate-700 shadow-lg  hover:bg-green-700 focus:bg-green-700"
            onClick={() => {
              return setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pegination;
