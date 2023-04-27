import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bookHeart from '../../../../assets/images/favoris-01.svg';
import bookWish from '../../../../assets/images/wishlist.svg';
import bookLu from '../../../../assets/images/lu.svg';
import bookLire from '../../../../assets/images/lire.svg';
import bookAchete from '../../../../assets/images/achetes.svg';

import './styles.scss';
import { filterBook, setSortBy } from '../../../../actions/book';

function MenuLeft() {
  const dispatch = useDispatch();
  const libraries = useSelector((state) => state.book.libraries);

  const handleSortByChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };
  const filterByStatus = (status) => {
    const filteredBooks = libraries.filter((book) => book.status === status);
    dispatch(filterBook(filteredBooks));
  };
  return (
    <div className="col-12 col-md-4 searchBiblio">
      <Link
        className="btn btn-warning btn-md"
        to="/ajout-livre"
        role="button"
      >
        Ajouter un livre
      </Link>
      <ul className="navLibrary mt-3">
        <li className="allBookLink" onClick={() => dispatch(filterBook(libraries))}>Tous mes livres</li>
        <li className="bookFinished" onClick={() => filterByStatus('finished')}><img src={bookLu} className="img-fluid" alt="..." />Livres lus</li>
        {/* <li className="bookPurchased" onClick={() => filterByStatus('toRead')}><img src={bookLire} className="img-fluid" alt="..." />Pile à lire</li> */}
        <li className="bookPurchased" onClick={() => filterByStatus('purchased')}><img src={bookAchete} className="img-fluid" alt="..." />Achetés</li>
        <li className="bookWish" onClick={() => filterByStatus('wishlist')}><img src={bookWish} className="img-fluid" alt="..." />Mes envies </li>
        <li className="bookFavorite" onClick={() => filterByStatus('favorite')}><img src={bookHeart} className="img-fluid" alt="..." />Coups de coeur</li>
      </ul>
      <select onChange={handleSortByChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
        <option defaultValue>Recherche par...</option>
        <option value="title">Titre</option>
        <option value="publicationDate">date de publication</option>
        <option value="editor">editeur</option>
      </select>
    </div>
  );
}

export default MenuLeft;
