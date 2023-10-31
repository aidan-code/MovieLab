import { BiSearchAlt2 } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import './App.css';
import Boxes from './Boxes';

const MOVIE_API = "http://www.omdbapi.com/?apikey=545d99cc"

function App() {
  const [search, setSearch] = useState()

  const handleSearch = () => {
    setSearch("Superman")
  }

  const movie1 = {
    
      Title: "The Amazing Spiderman 2 Webb Cut",
      Year: "2021",
      imdbID: "tt18351128",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  }

  const searchMovies = async(title) =>{
    const response = await fetch(`${MOVIE_API}&s=${title}`)
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
   searchMovies('Spiderman')
  }, [])
  
  return (
    <div className="App">  

      <h1>Movie Lab</h1>

      <div className='search'>
        <input
        placeholder = 'Search for Movies'
        value = {search}
        onChange = {handleSearch}
        />

        <BiSearchAlt2 onClick={() =>{}} alt="search"/>
      </div>
    <div className='container'>
      <Boxes movie1={movie1}/>
    </div>

    </div>
  );
}

export default App;
