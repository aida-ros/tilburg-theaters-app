import React from 'react';

function Filter (props) {
    const { 
    genres,
    onChange,
    filterByGenre,
    filterPerformer,
    filterTitle } = props

 
  const renderGenres = genres => {
      if (!genres) {
        return
      } else {
        return genres.map(genre => <option key={genre} value={genre}>{genre}</option>)
      }
    }

  return (
    <div className="filters-container">
        <select
          id="genres"
          onChange={filterByGenre}>
            <option value='genre'>Zoek op genre</option>
            {renderGenres(genres)}
        </select>

        <form className='title-form' onSubmit={filterTitle} >
          <input 
            type='text' 
            name='title' 
            placeholder='Zoek titel' 
            onChange={onChange}></input>
        </form>

        <form className='performer-form' onSubmit={filterPerformer} >
          <input 
            type='text' 
            name='performer' 
            placeholder='Zoek artiest' 
            onChange={onChange}></input>
        </form>
    </div>
  );
}

export default Filter;
