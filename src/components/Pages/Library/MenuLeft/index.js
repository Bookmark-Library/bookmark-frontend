import { Link } from 'react-router-dom';
import bookHeart from '../../../../assets/images/favoris-01.svg';
import bookWish from '../../../../assets/images/wishlist.svg';
import bookLu from '../../../../assets/images/lu.svg';
import bookLire from '../../../../assets/images/lire.svg';
import bookAchete from '../../../../assets/images/achetes.svg';

import './styles.scss';

function MenuLeft() {
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
        <li className="allBookLink"><Link to="/bibliotheque">Tous mes livres</Link></li>
        <li className="bookFinished"><img src={bookLu} className="img-fluid" alt="..." /><Link to="/bibliotheque/lus">Livres lus</Link></li>
        <li className="bookPurchased"><img src={bookLire} className="img-fluid" alt="..." /><Link to="/bibliotheque/a-lire">Pile à lire</Link></li>
        <li className="bookPurchased"><img src={bookAchete} className="img-fluid" alt="..." /><Link to="/bibliotheque/achetes">Achetés</Link></li>
        <li className="bookWish"><img src={bookWish} className="img-fluid" alt="..." /><Link to="/bibliotheque/envies">Mes envies </Link></li>
        <li className="bookFavorite"><img src={bookHeart} className="img-fluid" alt="..." /><Link to="/bibliotheque/favoris">Coups de coeur</Link></li>
      </ul>
      <select className="form-select form-select-sm" aria-label=".form-select-sm example">
        <option defaultValue>Recherche par...</option>
        <option value="1">Titre</option>
        <option value="2">Auteur</option>
        <option value="3">Genre</option>
      </select>
    </div>
  );
}

export default MenuLeft;
