import { useDispatch, useSelector } from 'react-redux';

import { Link, Navigate, useParams } from 'react-router-dom';

import { openModalRate } from '../../../actions/book';
import Loader from '../../Loader';
import BookTab from './BookTab';

import './styles.scss';

function Book() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const libraries = useSelector((state) => state.book.libraries);
  const isLoading = useSelector((state) => state.book.isLoading);
  const dispatch = useDispatch();

  // eslint-disable-next-line eqeqeq
  const bookToDisplay = libraries.find((book) => book.book.id == id);
  // console.log(bookToDisplay);
  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (

    <div className="container">

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
          <section className="row bookTab">
            <div className="col-12 col-md-8">
              <h5>Informations du livre</h5>
            </div>
            <div className="col-12 col-md-4 flex-end">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  dispatch(openModalRate());
                }}
              >
                Modifier mes infos
              </button>
            </div>
            <BookTab {...bookToDisplay} />
          </section>
        </div>
      </div>
    </div>

  );
}

export default Book;
