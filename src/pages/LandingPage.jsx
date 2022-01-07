import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../components/moviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";


export function LandingPage(){
    const [query] =useSearchParams();
    const search = query.get("search");
    const debouncedSearch =useDebounce(search,600)
    return (
    <div>
        <Search/>
        <MoviesGrid  key={debouncedSearch} search={debouncedSearch}/>
    </div>
    );
}