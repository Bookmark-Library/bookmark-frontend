import { useDispatch, useSelector } from 'react-redux';

import {
  Link, Navigate, useParams, useNavigate,
} from 'react-router-dom';

import {
  deleteBook,
  openModalRate, putBookmarksInState,
  putCommentInState, putIdInState, putQuoteInState, putRateInState,
} from '../../../actions/book';
import BookTab from './BookTab';
import bookWish from '../../../assets/images/wishlist.svg';
import defaultBook from '../../../assets/images/default-img.jpg';
import bookHeart from '../../../assets/images/favoris-01.svg';
import bookLu from '../../../assets/images/lu.svg';
import bookLire from '../../../assets/images/lire.svg';
import bookAchete from '../../../assets/images/achetes.svg';
import rateGrey from '../../../assets/images/note-gris.svg';
import rateyellow from '../../../assets/images/note-jaune.svg';
import './styles.scss';
import Loader from '../../Loader';
import ModalRate from './ModalRate';

function Book() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.user.logged);
  const libraries = useSelector((state) => state.book.libraries);
  const isLoading = useSelector((state) => state.book.isLoading);
  const modalRate = useSelector((state) => state.book.modalRate);
  // eslint-disable-next-line eqeqeq
  const bookToDisplay = libraries.find((book) => book.book.slug === slug);
  const bookdefault = bookToDisplay.book.image ?? defaultBook;
  dispatch(putCommentInState(bookToDisplay.comment));
  dispatch(putQuoteInState(bookToDisplay.quote));
  dispatch(putRateInState(bookToDisplay.rate));
  dispatch(putBookmarksInState('finished', bookToDisplay.finished));
  dispatch(putBookmarksInState('purchased', bookToDisplay.purchased));
  dispatch(putBookmarksInState('favorite', bookToDisplay.favorite));
  dispatch(putBookmarksInState('wishlist', bookToDisplay.wishlist));
  dispatch(putIdInState('id', bookToDisplay.id));

  const rating = bookToDisplay.rate; // note du produit passée en paramètre
  const getRatingImage = () => {
    switch (rating) {
      case 0:
        return (
          <>
            <img src={rateGrey} alt="0/5" />
            <img src={rateGrey} alt="0/5" />
            <img src={rateGrey} alt="0/5" />
            <img src={rateGrey} alt="0/5" />
            <img src={rateGrey} alt="0/5" />
          </>
        );
      case 1:
        return (
          <>
            <img src={rateyellow} alt="1/5" />
            <img src={rateGrey} alt="1/5" />
            <img src={rateGrey} alt="1/5" />
            <img src={rateGrey} alt="1/5" />
            <img src={rateGrey} alt="1/5" />
          </>
        );

      case 2:
        return (
          <>
            <img src={rateyellow} alt="2/5" />
            <img src={rateyellow} alt="2/5" />
            <img src={rateGrey} alt="2/5" />
            <img src={rateGrey} alt="2/5" />
            <img src={rateGrey} alt="2/5" />
          </>
        );

      case 3:
        return (
          <>
            <img src={rateyellow} alt="3/5" />
            <img src={rateyellow} alt="3/5" />
            <img src={rateyellow} alt="3/5" />
            <img src={rateGrey} alt="3/5" />
            <img src={rateGrey} alt="3/5" />
          </>
        );
      case 4:
        return (
          <>
            <img src={rateyellow} alt="4/5" />
            <img src={rateyellow} alt="4/5" />
            <img src={rateyellow} alt="4/5" />
            <img src={rateyellow} alt="4/5" />
            <img src={rateGrey} alt="4/5" />
          </>
        );
      case 5:
        return (
          <>
            <img src={rateyellow} alt="5/5" />
            <img src={rateyellow} alt="5/5" />
            <img src={rateyellow} alt="5/5" />
            <img src={rateyellow} alt="5/5" />
            <img src={rateyellow} alt="5/5" />
          </>
        );
      default:
        return null; // aucune image ne sera affichée si la note est invalide
    }
  };
  // For return at the home page when user is not connected

  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (

    <div className="container">
      {isLoading && <Loader />}

      <div className="book-content container mt-5">
        <Link
          to="/bibliotheque"
          className="linkRetour"
        >
          Retour à la bibliothèque
        </Link>
        <div className="row">
          <div className="col-md-3">
            <img className="book-image img-fluid" src={bookdefault} alt="" />
          </div>
          <div className="book-synopsy col-md-9">
            <h3 className="book-title">{bookToDisplay.book.title}</h3>
            <p className="book-description">{bookToDisplay.book.summary}
            </p>
            <div className="row">
              <div className="book-author col-md-6 col-12">
                <strong>Auteur(s) :</strong>
                {bookToDisplay.book.authors.map((author) => (
                  <p key={author.lastname} className="book-author"> {author.lastname} {author.firstname}</p>
                ))}
                <p className="book-editor"><strong>Editeur :</strong> {bookToDisplay.book.editor}</p>
                <p className="book-editor"><strong>Année de publication :</strong> {bookToDisplay.book.publicationDate}</p>
              </div>
              <div className="col-md-6 col-12">

                <p className="book-editor"><strong>Prix :</strong> {bookToDisplay.book.price}</p>
                {bookToDisplay.book.isbn === null ? '' : <p className="book-editor"><strong>Isbn :</strong> {bookToDisplay.book.isbn}</p>}
                <p className="book-editor"><strong>Nombre de page :</strong> {bookToDisplay.book.pages}</p>
              </div>
            </div>
          </div>
          <section className="row bookTab">
            <div className="col-12 col-md-6 colInfoLeft">
              <BookTab {...bookToDisplay} />
            </div>
            <div className="col-12 col-md-6 colInfoRight">
              <div className="caracteristique d-flex">
                <div className="col-6 col-md-4">
                  <p>Mes bookMark</p>
                  <p>
                    {bookToDisplay.favorite && <img className="bookmark" src={bookHeart} alt="" />}
                    {bookToDisplay.wishlist && <img className="bookmark" src={bookWish} alt="" />}
                    {bookToDisplay.finished && <img className="bookmark" src={bookLu} alt="" />}
                    {bookToDisplay.purchased && !bookToDisplay.finished && <img className="bookmark" src={bookLire} alt="" />}
                    {bookToDisplay.purchased && <img className="bookmark" src={bookAchete} alt="" />}
                  </p>
                </div>
                <div className="rateDiv col-6 col-md-4">
                  <p>Ma note</p>

                  {getRatingImage()}

                </div>
                <div className="rateDiv col-6 col-md-4">
                  <p>Genres sélectionnés </p>

                  {getRatingImage()}

                </div>
              </div>
              <div className="navBookmark d-flex justify-content-between mt-3 text-center col-12">
                <span><img src={bookLu} className="img-fluid mx-auto d-block" alt="..." />Livres lus</span>
                <span><img src={bookLire} className="img-fluid mx-auto d-block" alt="..." />Pile à lire</span>
                <span><img src={bookAchete} className="img-fluid mx-auto d-block" alt="..." />Achetés</span>
                <span><img src={bookWish} className="img-fluid mx-auto d-block" alt="..." />Mes envies</span>
                <span><img src={bookHeart} className="img-fluid mx-auto d-blockc" alt="..." />Coups de coeur</span>
              </div>
            </div>

            <div className="col-md-6 mx-auto d-block text-center mt-4">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  dispatch(openModalRate());
                }}
              >
                Modifier les infos du livre
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteBook());
                  navigate('/bibliotheque');
                }}
              >
                Supprimer le livre
              </button>
              {modalRate && <ModalRate />}
            </div>
          </section>

        </div>
      </div>
    </div>

  );
}

export default Book;
