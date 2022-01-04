import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";

import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";



export function MoviesGrid(){

    const  [movies, setMovies]=useState([]);
    const [isLoading,setIsloading]=useState(true);

    //const movies =moviesState[0];
    //const setMovies =moviesState[1];
    const query =useQuery();
    const search = query.get("search");
    

    useEffect(()=>{
        setIsloading(true);
        const searchURL= search ? "/search/movie?query="+search
        :"/discover/movie";
        
        get(searchURL).then((data)=>{
            setMovies(data.results);
            setIsloading(false);
        });
    },[search]);

    if(isLoading){
        return <Spinner></Spinner>
    }

    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie)=> (
               <MovieCard key={movie.id}  movie={movie}/>
            ))}
        </ul>
    );
}