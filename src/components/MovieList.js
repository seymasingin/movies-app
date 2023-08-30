import React from "react";
import '../styles/MovieList.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {BackwardOutlined, ForwardOutlined} from "@ant-design/icons"


const MovieList = ({year, page, setPage}) =>{
   
    const {movies} = useSelector(store=> store.movies)
    const filteredMovies = movies && movies.Search?.filter((movie) => movie.Year === year)
    const previousPage = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };

    return (
        <div className="lists">
            {year === 0 ?   movies?.Search?.map((movie) => (
                                <Link className="link" to={`/movie/${movie.imdbID}`}>
                                    <div className="imdb"> {movie.imdbID} </div>
                                    <div className="movieName"> {movie.Title} </div>
                                    <div className="movieYear"> {movie.Year} </div>
                                </Link>
                ))
               : filteredMovies.map((movie) => (
                    <Link className="link" to={`/movie/${movie.imdbID}`} >
                            <div className="imdb">
                                {movie.imdbID}
                            </div>
                            <div className="movieName">
                                {movie.Title}
                            </div>
                            <div className="movieYear">
                                {movie.Year}
                            </div>   
                    </Link>
            ))
            }
            <div className="arrows">
                <button className="arrow1" onClick={previousPage}>
                    <BackwardOutlined />
                </button>
                <button className="arrow2"onClick={() => {year !== 0 && filteredMovies.length < 10 ? setPage(page) : setPage(page + 1);}}>
                    <ForwardOutlined  />
                </button>
            </div>
        </div>
    )
}

export default MovieList;
