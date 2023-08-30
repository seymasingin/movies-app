import React, { useEffect, useState } from "react";
import "../styles/Detail.css"
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const apiKey = "7dd15e5d";

    const { imdbID } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&Plot=short`)
    .then((res) => {
        setMovie(res.data);
      })
  }, []);

    return(
        <div className="detail">
            <div className="image">
            <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="detailText">
                <h1 className="movieTitle">{movie.Title}</h1>
                <h3>Director:  {movie.Director}</h3>
                <h3>Writer:  {movie.Writer}</h3>
                <h3>Actors:  {movie.Actors}</h3>
                <h3>Year:  {movie.Year}</h3>
                <h3>Released:  {movie.Released}</h3>
                <h3>Language:  {movie.Language}</h3>
                <h3>Country:  {movie.Country}</h3>
                <h3>Box Office:  {movie.BoxOffice}</h3>
            </div>
        </div>
    )
}

export default Detail;


