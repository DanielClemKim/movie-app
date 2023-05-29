import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Movie({ id, coverImg, title, summary, genres, detailOff, year }) {
  const navigate = useNavigate();
  return (
    <div className="movie">
      {detailOff ? (
        <div>
          <Link to={`/movie/${id}`}>
            <img src={coverImg} alt={title} className="image" />
          </Link>
          <h2 className="title">
            <Link to={`/movie/${id}`} className="link">
              {title}
            </Link>
          </h2>
        </div>
      ) : (
        <div className="detail">
          <button className="btn" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img src={coverImg} alt={title} className="image" />
          <div className="description">
            <h2 className="title">{title}</h2>
            <h3 className="year">{year}</h3>
            <p className="summary">
              {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
            </p>
            <ul className="genres">
              {genres.map((g) => (
                <li key={g} className="genre">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
