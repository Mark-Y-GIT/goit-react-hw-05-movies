import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/TmdbAPI';
import { v4 as uuidv4 } from 'uuid';
import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const imgPath = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    api.fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={s.wrapper}>
          <img
            className={s.img}
            src={`${imgPath}${movie.poster_path}`}
            alt={`${movie.original_title}`}
          />
          <div className={s.content}>
            <h1 className={s.title}>
              {movie.original_title}({movie.release_date.slice(0, 4)})
            </h1>
            <p>
              <span className={s.score}>User Score:</span>
              {`${movie.vote_average * 10}%`}
            </p>
            <h2>Overview</h2>
            <p className={s.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map(genre => (
                <span key={uuidv4()} className={s.genre}>
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
