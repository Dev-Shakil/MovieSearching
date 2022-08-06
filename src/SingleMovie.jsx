import {useState,useEffect} from "react";
import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { API_URL } from './context';
import { NavLink } from "react-router-dom";
const SingleMovie = () => {
    const {id} =useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");


const getMovies = async (url)=>{
    setIsLoading(true);
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        if(data.Response === "True"){
            setIsLoading(false);
            setMovie(data)                           
        }
       

    }catch(err){
        console.log(err)
    }}
    
    useEffect(()=>{
        const TimerOut = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`);
        },800);
        return ()=>clearTimeout(TimerOut)
        
    },[id]);
    if(isLoading){
      return(
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      );
    };
  return (
    <section className="movie-section container">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie