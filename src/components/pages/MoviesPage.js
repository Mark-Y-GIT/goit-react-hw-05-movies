import MoviesSearch from '../MoviesSearch';
import MoviesSearchList from '../MoviesSearchList';
import { useHistory, useLocation } from 'react-router';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const onChange = movieName => {
    history.push({
      ...location,
      search: `query=${movieName}`,
    });
  };

  const locationQuery = new URLSearchParams(location.search).get('query');

  return (
    <>
      <MoviesSearch onChange={onChange} />
      {locationQuery && <MoviesSearchList movie={locationQuery} />}
    </>
  );
}
