import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import PageHeading from '../PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Views.module.css';

export default function BookDetailsView() {
  const history = useHistory();
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/books');
  };

  return (
    <>
      <PageHeading text={`Книга ${bookId}`} />

      {book && (
        <>
          <Button variant="primary" type="button" onClick={onGoBack}>
            {location?.state?.from?.label ?? 'Назад'}
          </Button>
          <hr />
          <div className={styles.container}>
            <img src={book.imgUrl} alt={book.title} className="img-thumbnail" />
            <div className={styles.thumb}>
              <h2 className={styles.title}>{book.title}</h2>
              <p>Автор: {book.author.name}</p>
              <p>{book.descr}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
