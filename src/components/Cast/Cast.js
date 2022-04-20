import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import api from 'components/services/TmdbAPI';

export default function Cast({ movieId }) {
  const imgPath = 'https://image.tmdb.org/t/p/original';
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api.fetchMoviesCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(person => (
          <li key={person.id}>
            <img
              src={`${imgPath}${person.profile_path}`}
              alt={person.name}
              width="200"
            />
            <p>{person.name}</p>
          </li>
        ))}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
