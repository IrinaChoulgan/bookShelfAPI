import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../PageHeading/PageHeading';
import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);
  const location = useLocation();
  console.log('BooksView', location);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Книги" />
      {books &&
        books.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                state: {
                  from: {
                    location,
                    label: 'Назад ко всем книгам',
                  },
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
    </>
  );
}
