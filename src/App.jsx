// import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from './redux/auth';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';
import { MovieView } from './views/MovieView';
import { EditProfileView } from './views/EditProfileView';
import { ReviewsView } from './views/ReviewsView';
import { PrivateRoute } from './components/PrivateRoute.js';
import { PublicRoute } from './components/PublicRoute.js';

import { Container } from './components/Container';
import { authOperations } from './redux/auth';
import { filmOperations } from './redux/film';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(filmOperations.getFilms());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/movie"
            element={
              <PrivateRoute>
                <MovieView />
              </PrivateRoute>
            }
          />
          <Route
            path="/reviews"
            element={
              <PrivateRoute>
                <ReviewsView />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <PrivateRoute>
                <EditProfileView />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    )
  );
};

export default App;
