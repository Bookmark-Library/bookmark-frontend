import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import bookHeart from '../../../assets/images/bookmark.svg';

import './styles.scss';

function Library() {
  const library = useSelector((state) => state.book.library);
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
            {library.map((book) => (
              <div className="bookLien">
                <Link to={`/bibliotheque/livre/${book.book.id}`}><img key={book.book.id} src={book.book.image} className="img-thumbnail img-fluid" alt="..." /></Link>
                <img className="bookHeart" src={bookHeart} alt="" />
                <div>{book.book.title}</div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

  );
}

export default Library;
