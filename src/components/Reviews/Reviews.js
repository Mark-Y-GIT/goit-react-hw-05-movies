import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import api from 'components/services/TmdbAPI';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.fetchMoviesReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <li key={review.author}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
