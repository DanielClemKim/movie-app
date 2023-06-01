import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Movie({
  id,
  title,
  name,
  coverImg,
  year,
  summary,
  genres,
  detailOff,
  goToNextPage,
  goToPreviousPage,
}) {
  const navigate = useNavigate();
  return detailOff ? (
    !title ? (
      <div className="movie-home">
        <button className="btn right" onClick={goToNextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button className="btn left" onClick={goToPreviousPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Link to={`/tv/${id}`}>
          <img src={coverImg} alt={title} className="image" />
        </Link>
        <Link to={`/tv/${id}`} className="link">
          <h1 className="title">{name}</h1>
        </Link>
      </div>
    ) : (
      <div className="movie-home">
        <button className="btn right" onClick={goToNextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button className="btn left" onClick={goToPreviousPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} className="image" />
        </Link>
        <Link to={`/movie/${id}`} className="link">
          <h1 className="title">{title}</h1>
        </Link>
      </div>
    )
  ) : !title ? (
    <div className="movie-detail">
      <button className="btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img src={coverImg} alt={title} className="image" />
      <div className="description">
        <h1 className="title">{name}</h1>
        <h2 className="year">{year}</h2>
        <p className="summary">
          {summary.length > 400 ? `${summary.slice(0, 400)}...` : summary}
        </p>
        <ul className="genres">
          {genres.map((genre) => (
            <li key={genre.id} className="genre">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
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
          {summary.length > 400 ? `${summary.slice(0, 400)}...` : summary}
        </p>
        <ul className="genres">
          {genres.map((genre) => (
            <li key={genre.id} className="genre">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  coverImg: PropTypes.string.isRequired,
  year: PropTypes.string,
  summary: PropTypes.string,
  detailOff: PropTypes.bool,
};

export default Movie;
