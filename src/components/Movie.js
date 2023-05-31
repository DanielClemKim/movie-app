import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Movie({ id, title, coverImg, year, summary, genres, detailOff }) {
  const navigate = useNavigate();
  return detailOff ? (
    <div className="movie-home">
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className="image" />
      </Link>
      <Link to={`/movie/${id}`} className="link">
        <h1 className="title">{title}</h1>
      </Link>
    </div>
  ) : (
    <div className="movie-detail">
      <button className="btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img src={coverImg} alt={title} className="image" />
      <div className="description">
        <h1 className="title">{title}</h1>
        <h2 className="year">{year}</h2>
        <p className="summary">
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className="genres">
          {genres.map((genre) => (
            <li key={genre} className="genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  year: PropTypes.number,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  detailOff: PropTypes.bool,
};

export default Movie;
