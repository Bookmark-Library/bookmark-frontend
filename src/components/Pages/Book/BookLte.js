import { useDispatch, useSelector } from 'react-redux';

import {
  Link, useParams, useNavigate,
} from 'react-router-dom';

import {
  putBookmarksInState,
  putCommentInState, putIdInState, putQuoteInState, putRateInState,
} from '../../../actions/book';

import defaultBook from '../../../assets/images/default-img.jpg';
import './styles.scss';
import Loader from '../../Loader';

function BookLte() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const libraries = useSelector((state) => state.book.libraries);
  const bookList = useSelector((state) => state.book.bookList);
  const genderId = useSelector((state) => state.book.genderId);

  const isLoading = useSelector((state) => state.book.isLoading);
  console.log(libraries);
  // eslint-disable-next-line eqeqeq
  const bookToDisplay = bookList.find((book) => book.slug == slug);
  const bookdefault = bookToDisplay.image ?? defaultBook;
  dispatch(putCommentInState(bookToDisplay.comment));
  dispatch(putQuoteInState(bookToDisplay.quote));
  dispatch(putRateInState(bookToDisplay.rate));
  dispatch(putBookmarksInState('finished', bookToDisplay.finished));
  dispatch(putBookmarksInState('purchased', bookToDisplay.purchased));
  dispatch(putBookmarksInState('favorite', bookToDisplay.favorite));
  dispatch(putBookmarksInState('wishlist', bookToDisplay.wishlist));
  dispatch(putIdInState('id', bookToDisplay.id));

  return (

    <div className="container">
      {isLoading && <Loader />}

      <div className="book-content container mt-5">
        <Link
          to={`/genre/${genderId}`}
          className="linkRetour"
        >
          Retour à la liste
        </Link>
        <div className="row">
          <div className="col-md-3">
            <img className="book-image img-fluid" src={bookdefault} alt="" />
          </div>
          <div className="book-synopsy col-md-9">
            <h3 className="book-title">{bookToDisplay.title}</h3>
            <p className="book-description">{bookToDisplay.summary}
            </p>
            <div className="row">
              <div className="book-author col-md-6 col-12">
                <strong>Auteur(s) :</strong>
                {bookToDisplay.authors.map((author) => (
                  <p key={author.lastname} className="book-author"> {author.lastname} {author.firstname}</p>
                ))}
                <p className="book-editor"><strong>Editeur :</strong> {bookToDisplay.editor}</p>
                <p className="book-editor"><strong>Année de publication :</strong> {bookToDisplay.publicationDate}</p>
              </div>
              <div className="col-md-6 col-12">

                <p className="book-editor"><strong>Prix :</strong> {bookToDisplay.price}</p>
                {bookToDisplay.isbn === null ? '' : <p className="book-editor"><strong>Isbn :</strong> {bookToDisplay.isbn}</p>}
                <p className="book-editor"><strong>Nombre de page :</strong> {bookToDisplay.pages}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default BookLte;
