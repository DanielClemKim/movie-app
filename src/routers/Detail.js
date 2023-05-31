import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return loading ? (
    <div className="load">
      <FontAwesomeIcon icon={faSpinner} fade />
    </div>
  ) : (
    <Movie
      title={movie.title}
      coverImg={movie.medium_cover_image}
      year={movie.year}
      summary={movie.description_intro}
      genres={movie.genres}
      detailOff={false}
    />
  );
}

export default Detail;
