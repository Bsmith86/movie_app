import React from 'react';
import './index.css'
const DisplayMovie = (props) => {
  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "FROM DISPLAY_MOVIE");

  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div id='display'>
        <h3>MOVIE DISPLAY</h3>
        <h4>{searchedMovie.Title}</h4>
        <p>{searchedMovie.Plot}</p>
      {/* check if posterURL exists */}
        <img src={searchedMovie.Poster} alt="" />
      </div>
      )
    } else {
      return (
        <div>
          waiting for movie...
        </div>
      )
    }
  }

const handleClick = () => {
  console.log('clicked');
  // add title of current movie to that array (push it)
  if (!movieArray.includes(searchedMovie.Title)) {
    setMovieArray([...movieArray, searchedMovie.Title])
  }
}

  return (
    <section 
      style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}} 
      onClick={() => handleClick()}
    >
      { returnMovieJSX() }
    </section>
  )
}

export default DisplayMovie