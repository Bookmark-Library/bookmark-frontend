import { Link } from 'react-router-dom';
import './styles.scss';

function MenuLeft() {
  return (
    <div className="col-12 col-md-4 searchBiblio">
      <Link
        className="btn btn-warning btn-md"
        to="/ajout-livre"
        role="button"
      >
        ajouter un livre
      </Link>
      <ul className="navLibrary mt-3">
        <li><Link to="/bibliotheque" className="allBookLink">Tous mes livres</Link></li>
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
  );
}

export default MenuLeft;
