import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css"


export function MovieDetails(){
    const {movieId} =useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState(null);

    useEffect(()=>{
        setIsLoading(true);
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
            setIsLoading(false);
        });
    },[movieId]);

    if(isLoading){
        return <Spinner/>
    }

    if (!movie){
        return null;
    }

    const imageUrl=getMovieImg( movie.poster_path,400)
    //const imageUrl="https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title} className={`${styles.col} ${styles.movieImage}`}/>
        <div className={`${styles.col} ${styles.movieDetails}`}>
            
            <p className={styles.firstItem}> <strong>Title:</strong> {movie.title}  </p>
            <p> <strong>Description:</strong> {movie.overview} </p>
            <p> <strong>Genres: </strong>{
                movie.genres.map(genre=>genre.name).join(", ")
                } 
            </p>
            <p>
                <strong>Release date: </strong>{movie.release_date}
            </p>
        </div>
    </div>;
}
