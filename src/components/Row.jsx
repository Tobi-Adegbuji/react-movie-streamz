import React, { useState, useEffect } from 'react'
import axios from '../axios'; 

const BASE_URL = "https://image.tmdb.org/t/p/w500/"; 

function Row({ title, getUrl}) {

    //How does react hooks work? 
    //t 
    //UseState is used to add local state to a function.
    //useState can be destructured in the state, and a function that changes the state. 
    const [movies, setMovies]  = useState([]); //We are setting the initial state of the movies.

    //Every time react renders this component, useEffect re-runs 
    //1st param is what componenent should do when rendered
    //2nd param recieves an array, adding values tells spring to only run useEffect when the said values have changed. 
    //Add an empty array basically means jsut run once when component is rendered.  It mimics componentDidMount
    useEffect(() => {
        async function fetchData(){
            //await means to wait for response to comeback before doing something.
            const request = await axios.get(getUrl);
            setMovies(request.data.results)
            return request; 
        }
        fetchData(); 
    } ,[getUrl])


    console.log(movies);

    //Because getUrl is outside the block, we have to tell useEffect that we are using that variable in the 2nd parameter

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                    {/* Several row posters */}
                    {movies.map((movie, id) => (
                        <img className="row_poster" src={`${BASE_URL}${movie.poster_path}`} alt={movie.title}/>
                    ))}
            </div>
        </div>
    )
}

export default Row
