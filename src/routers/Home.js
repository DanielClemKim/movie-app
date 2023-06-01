import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage, 10));
    }
  }, []);

  const saveCurrentPage = (page) => {
    sessionStorage.setItem("currentPage", page.toString());
  };

  const getMovies = async (page) => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=5f05774ba4241386488bc7ad7b16cf4d&language=en-US&page=${page}`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        const newPage = prevPage - 1;
        saveCurrentPage(newPage);
        return newPage;
      }
      return prevPage;
    });
  };
  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1;
      saveCurrentPage(newPage);
      return newPage;
    });
  };
  return loading ? (
    <div className="load">
      <FontAwesomeIcon icon={faSpinner} fade />
    </div>
  ) : (
    <div className="home">
      <button className="btn right" onClick={goToNextPage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button className="btn left" onClick={goToPreviousPage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {movies.map((movie) =>
        movie.genre_ids.includes(27) ? null : (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
            coverImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            detailOff={true}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        )
      )}
    </div>
  );
}

export default Home;
