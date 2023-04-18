import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bookHeart from '../../../assets/images/bookmark.svg';

import './styles.scss';

function Library() {
  const libraries = useSelector((state) => state.book.libraries);
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
            <li><a href="#">Tous mes livres</a></li>
            <li><a href="#">Livres lus</a></li>
            <li><a href="#">Livres à lire</a></li>
            <li><a href="#">Mes envies</a></li>
            <li><a href="#">Coups de coeurs</a></li>
          </ul>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Recherche par...</option>
            <option value="1">Titre</option>
            <option value="2">Auteur</option>
            <option value="3">Genre</option>
          </select>
        </div>
        <div className="col-12 col-md-8 col-right">
          <h2>Bibliothèque</h2>
          <div className="divBook d-flex">
            {libraries.map((library) => (
              <div className="bookLien col-12 col-md-2 text-center align-items-center">
                <Link to={`/bibliotheque/livre/${library.book.id}`}><img key={library.book.id} src={library.book.image} className="img-thumbnail img-fluid" alt="..." /></Link>
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

export default Library;
