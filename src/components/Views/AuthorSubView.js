import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Views.module.css';

export default function AuthorSubView({ authors }) {
  const location = useLocation();
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));
  return (
    <>
      <h1>{author.name}</h1>

      <ul className={styles.list}>
        {author.books.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `/books/${book.id}`,
                state: {
                  from: {
                    location,
                    label: 'Назад к автору',
                  },
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
