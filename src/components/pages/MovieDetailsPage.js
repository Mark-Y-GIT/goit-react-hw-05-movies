import { useEffect, useState } from 'react';
import {
  NavLink,
  useRouteMatch,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MovieDetails from '../MovieDetails/';
import Cast from '../Cast/';
import Reviews from '../Reviews';

function MoviesDetailsPage() {
  const [goBackPath, setGoBackPath] = useState();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    setGoBackPath(location.state.from.location);
  }, []);

  const GoBack = () => {
    history.push(goBackPath);
  };

  return (
    <>
      <button type="button" className="btn" onClick={GoBack}>
        Go back
      </button>
      <MovieDetails />
      <div className="castWrapper">
        <ul>
          <li key={uuidv4()}>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li key={uuidv4()}>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={`${url}/cast`}>{<Cast movieId={movieId} />}</Route>
        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}

export default MoviesDetailsPage;
