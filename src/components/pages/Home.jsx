import MovieCard from "../MovieCard";
import { useState } from 'react'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target[0].value;
        setSearchQuery(searchTerm);
        e.target[0].value = "";
        console.log(searchTerm);
    }

    const movies = [
        {
            title: "Gladiator",
            release_date: "2023-01-01",
            poster: "https://via.placeholder.com/150"
        },
        {
            title: "Terminator",
            release_date: "2023-02-01",
            poster: "https://via.placeholder.com/150"
        },
        {
            title: "Transformers",
            release_date: "2023-03-01",
            poster: "https://via.placeholder.com/150"
        }
    ];

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