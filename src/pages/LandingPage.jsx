import { MoviesGrid } from "../components/moviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    const query =useQuery();
    const search = query.get("search");
    const debouncedSearch =useDebounce(search,600)
    return (
    <div>
        <Search/>
        <MoviesGrid  key={debouncedSearch} search={debouncedSearch}/>
    </div>
    );
}