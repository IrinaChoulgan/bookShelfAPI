import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeView = lazy(() =>
  import('./components/Views/HomeView' /* webpackChunkName: "home-view"*/),
);
const AuthorView = lazy(() =>
  import(
    './components/Views/AuthorsView' /* webpackChunkName: "authors-view"*/
  ),
);
const BooksView = lazy(() =>
  import('./components/Views/BooksView' /* webpackChunkName: "books-view"*/),
);
const NotFoundView = lazy(() =>
  import(
    './components/Views/NotFoundView' /* webpackChunkName: "not-found-view"*/
  ),
);
const BookDetailsView = lazy(() =>
  import('./components/Views/BookDetailsView'),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1 className="spinner-border"></h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/authors">
            <AuthorView />
          </Route>
          <Route path="/books" exact>
            <BooksView />
          </Route>

          <Route path="/books/:slug">
            <BookDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
