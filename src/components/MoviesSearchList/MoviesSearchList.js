import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/TmdbAPI';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function MoviesPageSearchList({ movie }) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    api.fetchMoviesByName(movie).then(res => {
      if (!res.results.length) {
        toast.error(` No information about this movie "${movie}"`);

        return;
      }
      setMovies(res.results);
    });
  }, [movie]);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: movie.id && `${url}/${movie.id}`,
                  state: {
                    from: { location, label: `Go back` },
                  },
                }}
              >
                {movie.original_title ? movie.original_title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

MoviesPageSearchList.propTypes = {
  movie: PropTypes.string,
};
