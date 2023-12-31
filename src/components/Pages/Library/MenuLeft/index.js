import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bookHeart from '../../../../assets/images/favoris-01.svg';
import bookWish from '../../../../assets/images/wishlist.svg';
import bookLu from '../../../../assets/images/lu.svg';
import bookLire from '../../../../assets/images/lire.svg';
import bookAchete from '../../../../assets/images/achetes.svg';

import './styles.scss';
import { filterBook, setSearchTerm, setSortBy } from '../../../../actions/book';

function MenuLeft() {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.book.searchInput);

  const handleSortByChange = (event) => {
    dispatch(setSortBy(event.target.value));
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
      <form className="d-flex mt-4" role="search">
        <input
          className="form-control me-4"
          type="search"
          placeholder="Rechercher un livre"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => {
            dispatch(setSearchTerm(e.target.value));
          }}
        />
      </form>
      <ul className="navLibrary mt-3">
        <li className="allBookLink"><Link to="/bibliotheque">Tous mes livres</Link></li>
        <li className="bookFinished"><img src={bookLu} className="img-fluid" alt="..." /><Link to="/bibliotheque/lus">Livres lus</Link></li>
        <li className="bookPurchased"><img src={bookLire} className="img-fluid" alt="..." /><Link to="/bibliotheque/a-lire">Pile à lire</Link></li>
        <li className="bookPurchased"><img src={bookAchete} className="img-fluid" alt="..." /><Link to="/bibliotheque/achetes">Achetés</Link></li>
        <li className="bookWish"><img src={bookWish} className="img-fluid" alt="..." /><Link to="/bibliotheque/envies">Mes envies </Link></li>
        <li className="bookFavorite"><img src={bookHeart} className="img-fluid" alt="..." /><Link to="/bibliotheque/favoris">Coups de coeur</Link></li>
      </ul>
      <select onChange={handleSortByChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
        <option defaultValue>Trier par...</option>
        <option value="title">Titre</option>
        <option value="addDate">Dernier ajoutés </option>
      </select>
    </div>
  );
}

export default MenuLeft;
