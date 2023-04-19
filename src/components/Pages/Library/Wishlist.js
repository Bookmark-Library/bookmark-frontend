import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris.svg';

import './styles.scss';

function WishList() {
  const libraries = useSelector((state) => state.book.libraries);
  const logged = useSelector((state) => state.user.logged);
  const filtredByWishlist = libraries.filter((book) => book.whishlist === true);

  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container biblio mt-5">
      <div className="row">
        <div className="col-12 col-md-4 searchBiblio">
          <Link
            className="btn btn-warning btn-md"
            to="/ajout-livre"
            role="button"
          >
            ajouter un livre
          </Link>
          <ul className="navLibrary mt-3">
            <li><Link to="/bibliotheque">Tous mes livres</Link></li>
            <li><Link to="/bibliotheque/lus">Livres lus</Link></li>
            <li><Link to="/bibliotheque/a-lire">Pile à lire</Link></li>
            <li><Link to="/bibliotheque/envies">Mes envies</Link></li>
            <li><Link to="/bibliotheque/favoris">Coups de coeurs</Link></li>
          </ul>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue>Recherche par...</option>
            <option value="1">Titre</option>
            <option value="2">Auteur</option>
            <option value="3">Genre</option>
          </select>
        </div>
        <div className="col-12 col-md-8 col-right">
          <h2>Mes envies</h2>
          <div className="divBook d-flex">
            {filtredByWishlist
            && filtredByWishlist.map((library) => (
              <div key={library.book.id} className="bookLien col-12 col-md-2 text-center align-items-center">
                <Link to={`/bibliotheque/livre/${library.book.id}`}><img src={library.book.image} className="img-thumbnail img-fluid" alt="..." /></Link>
                <img className="bookHeart" src={bookHeart} alt="" />
                <div>{library.book.title}</div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

  );
}

export default WishList;
