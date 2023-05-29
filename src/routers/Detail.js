import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div className="panel">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.description_intro}
          genres={movie.genres}
          year={movie.year}
          detailOff={false}
        />
      )}
    </div>
  );
}

export default Detail;
