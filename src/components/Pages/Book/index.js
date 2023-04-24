import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { openModalRate } from '../../../actions/book';
import Loader from '../../Loader';
import BookTab from './BookTab';
import bookWish from '../../../assets/images/wishlist.svg';
import bookHeart from '../../../assets/images/favoris-01.svg';
import bookLu from '../../../assets/images/lu.svg';
import bookLire from '../../../assets/images/lire.svg';
import bookAchete from '../../../assets/images/achetes.svg';

import './styles.scss';

function Book() {
  const { id } = useParams();
  const libraries = useSelector((state) => state.book.libraries);
  const isLoading = useSelector((state) => state.book.isLoading);
  const dispatch = useDispatch();

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
              <strong>Auteur(s) :</strong>
              {bookToDisplay.book.authors.map((author) => (
                <p key={author.lastname} className="book-author"> {author.lastname} {author.firstname}</p>
              ))}

            </div>

            <p className="book-editor"><strong>Editeur :</strong> {bookToDisplay.book.editor}</p>
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
                  <p>{bookToDisplay.rate}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      ))}
    </div>

  );
}

export default Book;
