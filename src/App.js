import { Route, Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./components/pages/HomePage' /* webpackChunkName: "homePage" */)
);
const MoviesPage = lazy(() =>
  import('./components/pages/MoviesPage' /* webpackChunkName: "moviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/pages/MovieDetailsPage' /* webpackChunkName: "moviesDetailsPage" */
  )
);

export const App = () => {
  return (
    <>
      <ToastContainer />
      <div className="contentWrapper">
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};
