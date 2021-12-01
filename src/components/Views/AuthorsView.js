import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../PageHeading/PageHeading';
import styles from './Views.module.css';
// import slugify from 'slugify';

// const makeSlug = string => slugify(string, { lower: true });

const AuthorSubView = lazy(() =>
  import('./AuthorSubView' /* webpackChunkName: "author-sub-view"*/),
);

export default function AuthorView() {
  const { url } = useRouteMatch();
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Авторы" />

      {authors && (
        <ul className={styles.list}>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Route path="/authors/:authorId">
          {authors && <AuthorSubView authors={authors} />}
        </Route>
      </Suspense>
    </>
  );
}
