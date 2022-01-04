import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search(){
    const [searchText,setSearchText]=useState("");
    const history = useHistory();

    const query= useQuery();
    const search = query.get("search");

    useEffect(()=>{
        setSearchText(search || "");
    },[search])

    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push("/?search="+searchText)
    }
    return(
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    className={style.searchInput} 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value) }
                />
                <button type="submit" className={style.searchButton}>
                    <FaSearch size={20}></FaSearch>
                </button>
            </div>
        </form>
    )
}