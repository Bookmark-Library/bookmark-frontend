import { useDispatch, useSelector } from 'react-redux';

import { Link, Navigate, useParams } from 'react-router-dom';

import { openModalRate } from '../../../actions/book';
import BookTab from './BookTab';
import bookWish from '../../../assets/images/wishlist.svg';
import bookHeart from '../../../assets/images/favoris-01.svg';
import bookLu from '../../../assets/images/lu.svg';
import bookLire from '../../../assets/images/lire.svg';
import bookAchete from '../../../assets/images/achetes.svg';
import rateGrey from '../../../assets/images/note-gris.svg';
import rateyellow from '../../../assets/images/note-jaune.svg';

import './styles.scss';

function Book() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const libraries = useSelector((state) => state.book.libraries);

  // eslint-disable-next-line eqeqeq
  const bookToDisplay = libraries.find((book) => book.book.id == id);
  // console.log(bookToDisplay);
  // For return at the home page when user is not connected
  const rating = () => {
    let i;
    if (bookToDisplay.rate !== 0) {
      for (i = 1; i <= bookToDisplay.rate; i += 1) {
        <img src={rateyellow} alt="" />;
      }
    }
    if (bookToDisplay.rate < 5) {
      for (i = bookToDisplay.rate; i <= 5; i += 1) {
        <img src={rateGrey} alt="" />;
      }
    }
  };
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
              <strong>Auteur(s) :</strong>
              {bookToDisplay.book.authors.map((author) => (
                <p key={author.lastname} className="book-author"> {author.lastname} {author.firstname}</p>
              ))}

            </div>

            <p className="book-editor"><strong>Editeur :</strong> {bookToDisplay.book.editor}</p>
            <p className="book-editor"><strong>Prix :</strong> {bookToDisplay.book.price}</p>
            <p className="book-editor"><strong>Isbn :</strong> {bookToDisplay.book.isbn}</p>
            <p className="book-editor"><strong>nombre de page :</strong> {bookToDisplay.book.pages}</p>
            <p className="book-editor"><strong>Année de publication :</strong> {bookToDisplay.book.publcation_date}</p>
          </div>
          <section className="row bookTab">
            <div className="col-12 col-md-6">
              <h5>Informations du livre</h5>
              <BookTab {...bookToDisplay} />
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
            <div className="col-12 col-md-6">
              <h5>Caractéristiques</h5>
              <div className="caracteristique d-flex">
                <div className="col-12 col-md-6">
                  <p>Mes bookMark</p>
                  <p>
                    {bookToDisplay.favorites && <img className="bookmark" src={bookHeart} alt="" />}
                    {bookToDisplay.wishlist && <img className="bookmark" src={bookWish} alt="" />}
                    {bookToDisplay.finished && <img className="bookmark" src={bookLu} alt="" />}
                    {bookToDisplay.purchased && !bookToDisplay.finished && <img className="bookmark" src={bookLire} alt="" />}
                    {bookToDisplay.purchased && <img className="bookmark" src={bookAchete} alt="" />}
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <p>Ma note</p>
                  <p>{bookToDisplay.rate}
                    {rating()}

                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  );
}

export default Book;
