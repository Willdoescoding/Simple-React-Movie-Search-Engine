import {useEffect, useState} from "react";
import './App.css';

import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=c7379540'; 


const App = () =>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const searchMovies = async(title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    return(

        <div className="app">
            <center>
            <h1>
                WELCOME!
            </h1>
            <h2>
                SEARCH ANY MOVIES IN NO TIME!
            </h2>
            </center>

            <div className="search">

                <input placeholder="search for Movies" 
                value= {searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>

            <img src= {SearchIcon}
            alt="searchicon"
            onClick = {() => searchMovies(searchTerm)}

            />
                    
            </div>

            {
                movies?.length > 0
                ? (
                <div class ="container">
                    {movies.map((movie) => (

                        <MovieCard movie = {movie}/>
                    ))}
                </div>
                ):

                (
                    <div className="empty-result">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

        </div>
    );
}


export default App;

