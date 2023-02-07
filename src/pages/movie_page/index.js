import React, {useState} from 'react';
import Search from '../../components/search';
import DisplayMovie from '../../components/display_movie';
import FavoriteMovies from '../../components/favorite_movies';
import Ratings from '../../components/ratings';


const MoviePage = () => {

  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([]);
  const logString = (string) => {
    console.log("string is in APP", string);
  }

  return (
    <div>
        <Search setSearchedMovie={setSearchedMovie} user="Brandon" logString={logString}/>
        <DisplayMovie 
            searchedMovie={searchedMovie} 
            movieArray={movieArray} 
            setMovieArray={setMovieArray} 
        />
        <Ratings searchedMovie={searchedMovie}/>
        <FavoriteMovies movieArray={movieArray} searchedMovie={searchedMovie} />
    </div>
  )
}

export default MoviePage