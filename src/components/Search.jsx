import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export function Search(){

    const [query,setQuery]= useSearchParams();
    const search = query.get("search");

    const handleSubmit=(e)=>{
        e.preventDefault();
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
                    value={search ?? ""} 
                    autoFocus
                    onChange={ (e) => {
                        const value =e.target.value;
                        setQuery({search:value})
                        
                    } }
                />
                
                    <FaSearch size={20} className={style.searchButton}></FaSearch>
                
            </div>
        </form>
    )
}