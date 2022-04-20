import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import api from '../services/TmdbAPI';
import s from './HomePageList.module.css';

export default function HomePageList() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.fetchMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <>
      {movies && (
        <>
          <h1 className={s.ListTitle}>Trending today</h1>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: movie.id && `movies/${movie.id}`,
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
        </>
      )}
    </>
  );
}
