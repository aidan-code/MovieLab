import React from 'react'

const Boxes = ({ movie }) => {

  return (
    <div className='movies'>

    <div className='date'> {movie.Year}</div>

      <div className='poster'>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } alt ={movie.Title}/>
      </div>

      <div className='info'>
        <p>{movie.Type}</p>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default Boxes