import { useEffect, useState } from "react";

import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";

import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";



export function MoviesGrid({search}){

    const  [movies, setMovies]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    const [page, setPage] =useState(1);
    const [hasMore, setHasMore]=useState(true);

    //const movies =moviesState[0];
    //const setMovies =moviesState[1];
    //const query =useQuery();
    //const search = query.get("search");
    

    useEffect(()=>{
        setIsloading(true);
        const searchURL= search ? "/search/movie?query="+search +"&page="+page
        :"/discover/movie?page="+page;
        
        get(searchURL).then((data)=>{
            setMovies( (prevMovies) => prevMovies.concat(data.results) );
            setHasMore(data.page<data.total_pages)
            setIsloading(false);
        });
    },[search, page]);

    /*if(isLoading){
        return <Spinner></Spinner>
    }*/

    if (!isLoading && movies.length===0){
        return <Empty></Empty>
    }

    return(
        <InfiniteScroll 
            dataLength={movies.length} 
            hasMore={hasMore} 
            next={ () => setPage( (prevPage) => prevPage+1 )  }
            loader={ <Spinner/>}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie)=> (
                <MovieCard key={movie.id}  movie={movie}/>
                ))}
            </ul>
        </InfiniteScroll>
    );
}