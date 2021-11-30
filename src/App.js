import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';
import HomeView from './components/Views/HomeView';
import AuthorView from './components/Views/AuthorsView';
import BooksView from './components/Views/BooksView';
import NotFoundView from './components/Views/NotFoundView';
import BookDetailsView from './components/Views/BookDetailsView';

export default function App() {
  return (
    <Container>
      <AppBar />
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

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
