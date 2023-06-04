import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import DetailsPage from "./components/DetailsPage";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
    const [movies, setMovies] = useState(null);
    const [movieLoaded, setMovieLoaded] = useState(false);
    useEffect(() => {
        const fetchMovies = async () => {
            await fetch("https://api.tvmaze.com/search/shows?q=all")
                .then(async (res) => await res.json())
                .then(async (json) => {
                    await setMovies(json);
                    setMovieLoaded(true);
                    console.log(movies, "Movies");
                });
        };
        fetchMovies();
    }, [movieLoaded]);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage movies={movies} />} />
                <Route path="/details" element={<DetailsPage />} />
            </Routes>
        </>
    );
}

export default App;
