import { BiSearchAlt2 } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import './App.css';
import Boxes from './Boxes';
import { IconContext } from 'react-icons/lib';

const MOVIE_API = "http://www.omdbapi.com/?apikey=545d99cc"

function App() {
  const [movies, setMovies] = useState([ ])
  const [searchTerm, setSearchterm] = useState("")

  console.log(movies)
  console.log(searchTerm)

  // const movie1 = {
    
  //     Title: "The Amazing Spiderman 2 Webb Cut",
  //     Year: "2021",
  //     imdbID: "tt18351128",
  //     Type: "movie",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  // }

  const searchMovies = async (title) =>{
    const response = await fetch(`${MOVIE_API}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  
  }

  console.log(movies)

  useEffect(() => {
   searchMovies(movies)
  }, [])
  
  return (
    <div className="App">  

      <h1>Movies</h1>

      <div className='search'>
        <input
        type='text'
        placeholder = 'Search for Movies'
        value = {searchTerm}
        onChange = {(e) =>{setSearchterm(e.target.value)}}
        />

        <IconContext.Provider value={{size:"30px"}}>
        <BiSearchAlt2 onClick={() =>{searchMovies(searchTerm)}} alt="search"/>
        </IconContext.Provider>
      </div>

      { movies?.length > 0 ?
        (
          <div className='container'>
          {movies.map((movie) =>(
            <Boxes movie={movie} />
          ))}
          </div>
        )
        :
        (
          <div className='empty'>
            <p>Search for you preferred movie</p>
          </div>
        )
      }
    

    </div>
  );
}

export default App;
