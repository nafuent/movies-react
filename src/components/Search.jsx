import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search(){
    //const [searchText,setSearchText]=useState("");
    const history = useHistory();

    const query= useQuery();
    const search = query.get("search");

    /* useEffect(()=>{
        setSearchText(search || "");
    },[search]) */

    const handleSubmit=(e)=>{
        e.preventDefault();
        //history.push("/?search="+searchText)
    }
    return(
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Search a movie"
                    aria-label="Search movies"
                    className={style.searchInput} 
                    value={search} 
                    onChange={ (e) => {
                        const value =e.target.value;
                        //setSearchText(value);
                        history.push("/?search="+value)
                        //return setSearchText(e.target.value);
                    } }
                />
                
                    <FaSearch size={20} className={style.searchButton}></FaSearch>
                
            </div>
        </form>
    )
}