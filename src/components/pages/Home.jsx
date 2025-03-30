import MovieCard from "../MovieCard";
import { useEffect, useState } from 'react'
import '../../css/Home.css'
import { getPopularMovies, searchMovies } from "../../services/MovieApi";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target[0].value;
        setSearchQuery(searchTerm);
        e.target[0].value = "";
        console.log(searchTerm);
    }

    useEffect(() => {
        const searchedMovie = async (searchQuery) => {
            const searchedMvie = await searchMovies(searchQuery);
            setMovies(searchedMvie);
            
        }
        searchedMovie(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data);
        }
        fetchMovies();
    }, []);




    return (
        <div className="home">
            <form onSubmit={handleOnSubmit} className="search-form">
                <input type="text" placeholder="Search for a movie..." className='search-input' />
                <button type="submit" className='search-button'>Search</button>
            </form>
            <div className="movie-grid">
                { movies.map((movie, index) => (
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}
export default Home;