import React, { useEffect, useState } from "react";
import "../styles/Home.css"
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../rtk/moviesSlice";
import MovieList from "../components/MovieList"
import axios from "axios";

const Home = () => {

const apiKey = "7dd15e5d";

const {movies} = useSelector(store=> store.movies)
const dispatch = useDispatch();

const [selectType, setSelectType] = useState(0);
const [query, setQuery] = useState("pokemon");
const [year, setYear] = useState (0);
const [page, setPage] = useState(1);

function selectChange(e) {
    setSelectType(e.target.value);
}

function inputChange(e) {
    setQuery(e.target.value)
}

function yearChange (e) {
    setYear(e.target.value)
}


const getMovies = async () => {
const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie&page=${page}`)
.then(response=>dispatch(addMovie(response.data)))
};

const getAllMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`)
    .then(response=>dispatch(addMovie(response.data)))
    };

const getSeries = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=series&page=${page}`)
    .then(response=>dispatch(addMovie(response.data)))
    };

const getEpisode = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=episode&page=${page}`)
    .then(response=>dispatch(addMovie(response.data)))
    };

useEffect(() => {
    if (selectType === 0) {
      getAllMovies();
    } else if (selectType === 1) {
      getMovies();
    } else if (selectType === 2) {
      getSeries();
    } else if (selectType === 3) {
      getEpisode();
    }
  }, [selectType, query, page]);

  return (
    <div className="home">
        <div className="searchFilter">
            <select className="category" onChange={selectChange}>
                <option value="0">All</option>
                <option value="1">Movies</option>
                <option value="2">Series</option>
                <option value="3">Episodes</option>
            </select>
            <input className="movieSearch" placeholder="Search here" onChange={inputChange}/>
            <select className="year" onChange={yearChange} value={year}>
                <option value="0">
                    Year
                </option>
                    {movies.Search?.map((movie, index) => (
                        <option key={index} value={movie.Year}>
                            {movie.Year}
                        </option>))
                    }
            </select>
        </div>

        <div className="movies">
            <div className="headers">
                <div className="idHeader" >IMDB ID</div>
                <div className="nameHeader" >Movie Name</div>
                <div className="yearHeader" >Year</div>
            </div>
            <MovieList setPage={setPage} page={page} year={year} />
        </div>
    </div>
  )
}

export default Home;
