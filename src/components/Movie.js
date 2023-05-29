import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres, detailOff, year }) {
  return (
    <div className="movie">
      {detailOff ? (
        <div className="main">
          <Link to={`/movie/${id}`}>
            <img src={coverImg} alt={title} className="img" />
          </Link>
          <h2>
            <Link to={`/movie/${id}`} className="title">
              {title}
            </Link>
          </h2>
        </div>
      ) : (
        <div className="detail">
          <img src={coverImg} alt={title} className="img2" />
          <h2 className="title2">{title}</h2>
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
      )}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
