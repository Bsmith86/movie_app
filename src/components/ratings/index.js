import React from 'react'

const Ratings = (props) => {
    let {searchedMovie} = props;
    if (searchedMovie !== null){
   
    console.log(searchedMovie.Ratings);
    let ratingsJSX = searchedMovie.Ratings.map((ratings) => {
        return <div>
            <h4>{ratings.Source}</h4>
            <h5>{ratings.Value}</h5>
            
        </div>
    })

  return (
    <div style={{marginBottom: "50px"}}>
        <h1>Movie Ratings</h1>
        {ratingsJSX}
    </div>
  )}
}

export default Ratings

