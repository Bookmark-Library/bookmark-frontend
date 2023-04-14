import { Link } from 'react-router-dom';
import book1 from '../../../assets/images/book1.jpg';
import book2 from '../../../assets/images/book2.jpg';
import book3 from '../../../assets/images/book3.jpg';
import book4 from '../../../assets/images/book4.jpg';

import './styles.scss';

const Library = () => (
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
        <a className="bookLien" href="#"><img src={book1} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book1} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book2} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book2} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book3} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book3} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book4} className="img-thumbnail img-fluid" alt="..." /></a>
        <a className="bookLien" href="#"><img src={book4} className="img-thumbnail img-fluid" alt="..." /></a>
      </div>
    </div>
  </div>

);

export default Library;
