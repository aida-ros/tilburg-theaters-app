import React from 'react';

function Pagination() {
  const prevPage = () => {
    console.log('Previous')
  }

  const nextPage = () => {
    console.log('Next')
  }

  return (
    <div className="Pagination">
        <button 
          className='previous'
          onClick={prevPage}
        >Vorige</button>
        <button 
          className='next'
          onClick={nextPage}
        >Volgende</button>
    </div>
  );
}

export default Pagination;
