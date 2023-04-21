import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  changeSettingsField, submitLogin, submitLogout,
} from '../../actions/user';
import bookMarkLogo from '../../assets/images/bookmark-logo-copie.svg';
import LoginForm from '../LoginForm';

import './styles.scss';

function Header() {
  const dispatch = useDispatch();
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);
  const alias = useSelector((state) => state.user.alias);
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
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
                  className="linkNav active"
                >
                  Accueil
                </NavLink>
              </li>
              {logged && (
              <NavLink
                to="/bibliotheque"
                className="linkNav "
              >
                Bibliotheque
              </NavLink>
              )}
            </ul>
            {logged
            && (
            <form className="d-flex" role="search">
              <input className="form-control me-4" type="search" placeholder="Rechercher" aria-label="Search" />
            </form>
            )}

            <LoginForm
              email={emailValue}
              password={passwordValue}
              changeField={(newValue, identifier) => {
                dispatch(changeSettingsField(newValue, identifier));
              }}
              handleLogin={() => {
                dispatch(submitLogin());
              }}
              handleLogout={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('pseudo');
                localStorage.removeItem('bibliotheque');
                dispatch(submitLogout());
              }}
              isLogged={logged}
              loggedMessage=<Link to={`/user/${alias}`}>{`Bienvenue ${alias}`}</Link>
            />
            {/* <Link
              to="/inscription"
              className="btn-inscription"
            >
              s'inscrire
            </Link> */}

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
