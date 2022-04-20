import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function MoviesSearch({ onChange }) {
  const [movieName, setMovieName] = useState('');

  const onNameChange = evt => {
    setMovieName(evt.currentTarget.value.toLowerCase());
  };

  const onSubmit = evt => {
    evt.preventDefault();

    if (movieName.trim() === '') {
      toast('Enter name of the movie');
      return;
    }

    onChange(movieName);

    setMovieName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        value={movieName}
        autoFocus
        placeholder="Search movies"
        onChange={onNameChange}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
}

MoviesSearch.propTypes = {
  onChange: PropTypes.func,
};
