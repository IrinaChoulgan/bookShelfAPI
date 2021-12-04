import { useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as booksOperations from '../redux/books/booksOperations';
import * as booksSelectors from '../redux/books/booksSelectors';
import PageHeading from '../PageHeading/PageHeading';
import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks)

  useEffect(() => {
    dispatch(booksOperations.fetchBooks())
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />
      {books.length > 0 &&
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
