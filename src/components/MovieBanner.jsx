import React, {useState, useEffect} from 'react'
import axios from '../axios'
import endpoints from '../request'
import './MovieBanner.css'

function MovieBanner() {

    const [movie, setMovie] = useState([]); 

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(endpoints.trendingMovies)

                //Grabbing random movie from array.
            setMovie(request.data.results
                [Math.floor(Math.random() * request.data.results.length - 1)]
                );
            return request;
        }
        fetchData(); 
    }, []); 

    console.log(movie)


    //If text is too long, it will shorten the text
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str; 
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover", 
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //The question mark (optional chaining) means if movies is not found it will not freak out
                backgroundPosition: "center center"
            }}
        > 
            <div className="banner_contents">

                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name} 
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movie.overview,150)}
                </h1>
            </div>

            <div className="banner--fadeBottom"></div>

        </header>
    )
}

export default MovieBanner
