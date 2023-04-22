import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../Loader';
import BookTab from './BookTab';

import './styles.scss';

function Book() {
  const { id } = useParams();
  const libraries = useSelector((state) => state.book.libraries);
  const isLoading = useSelector((state) => state.book.isLoading);

  // eslint-disable-next-line eqeqeq
  const bookToDisplay = libraries.find((book) => book.book.id == id);
  // console.log(bookToDisplay);
  return (

    <div className="container">
      {isLoading && <Loader />}

      {(!isLoading && (

      <div className="book-content container mt-5">
        <Link
          to="/bibliotheque"
          className="linkRetour"
        >
          Retour à la bibliothèque
        </Link>
        <div className="row">
          <div className="col-md-3">
            <img className="book-image img-fluid" src={bookToDisplay.book.image} alt="" />
          </div>
          <div className="book-synopsy d-flex flex-column col-md-9">
            <h3 className="book-title">{bookToDisplay.book.title}</h3>
            <p className="book-description">{bookToDisplay.book.summary}
            </p>
            <div className="book-author">
              {bookToDisplay.book.authors.map((author) => (
                <p key={author.lastname} className="book-author"><strong>Auteur(s) :</strong> {author.lastname} {author.firstname}</p>
              ))}

            </div>

            <p className="book-editor"><strong>Editeur :</strong> {bookToDisplay.book.editor}</p>
          </div>
          <BookTab {...bookToDisplay} />
        </div>
      </div>
      ))}
    </div>

  );
}

export default Book;
