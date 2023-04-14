import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { openModal } from '../../actions/user';
import bookMarkLogo from '../../assets/images/logo-BookMark.jpg';

import './styles.scss';

function Header() {
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
          >
            <img src={bookMarkLogo} width="auto" height="110px" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                >
                  Accueil
                </NavLink>
              </li>
              <NavLink
                to="/bibliotheque"
                className="nav-link "
              >
                bibliotheque
              </NavLink>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-4" type="search" placeholder="Rechercher" aria-label="Search" />
            </form>
            <button
              type="button"
              className="btn-connexion me-2"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              se connecter
            </button>
            <Link
              to="/inscription"
              className="btn-inscription"
            >
              s'inscrire
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
