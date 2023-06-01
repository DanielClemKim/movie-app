import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Movie from "../components/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const { program, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/${program}/${id}?api_key=5f05774ba4241386488bc7ad7b16cf4d`
      )
    ).json();
    setMovie(json);
    setLoading(false);
  }, [program, id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  useEffect(() => {
    const handleBackNavigation = () => {
      navigate(-1);
    };
    window.addEventListener("popstate", handleBackNavigation);

    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, [navigate]);

  return loading ? (
    <div className="load">
      <FontAwesomeIcon icon={faSpinner} fade />
    </div>
  ) : (
    <Movie
      id={movie.id}
      title={movie.title || movie.name}
      coverImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      year={movie.first_air_date || movie.release_date}
      summary={movie.overview}
      genres={movie.genres}
      detailOff={false}
    />
  );
}

export default Detail;
