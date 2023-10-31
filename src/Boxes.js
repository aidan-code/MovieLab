import React from 'react'

const Boxes = ({ movie1 }) => {

  return (
    <div className='movies'>

    <div className='date'> {movie1.Year}</div>

      <div className='poster'>
        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' } alt ={movie1.Title}/>
      </div>

      <div className='info'>
        <p>{movie1.Type}</p>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  )
}

export default Boxes