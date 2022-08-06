import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from './context'

const Movies = () => {
    const {movie,isLoading} = useContext(AppContext);
   if(isLoading){
      return(
         <div className="movie-section">
            <div className="loading">Loading...</div>
         </div>
      )
   };
  return (
   <section className="movie-page">
      <div className="container grid grid-4-col">
         {movie.map((currMovie)=>{
            const {imdbID, Title, Poster} = currMovie;
            const MovieTitle = Title.substring(0,15)
            return(
               <NavLink to={`/movie/${imdbID}`}>
                  <div className="card">
                     <div className="card-info">
                        <h2 className="title">{MovieTitle.length>=15?`${MovieTitle}...`:MovieTitle}</h2>
                        <img src={Poster} alt={imdbID} className="poster-img" />
                     </div>
                  </div>
               </NavLink>
            )
         })}
      </div>
   </section>
  )
}

export default Movies