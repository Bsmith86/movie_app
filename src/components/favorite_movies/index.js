import React from 'react'
import './index.css'
const FavoriteMovies = (props) => {
    let {movieArray} = props;
    console.log(movieArray);
    let arrayJSX = movieArray.map((title, index) => {
        return <div key={index}>
            {title}
        </div>
    })

    // let imgJSX = searchedMovie.Poster.map((img) => {
    //     return <div>
    //         {img.Poster}
    //     </div>
    // })

  return (
    <div id='fav' style={{marginBottom: "50px"}}>
        <h1>Favorite Movies</h1>
        {arrayJSX}
        {/* {imgJSX} */}
    </div>
  )
}

export default FavoriteMovies