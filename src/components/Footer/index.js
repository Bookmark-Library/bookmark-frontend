import { Link } from "react-router-dom";
import "./styles.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const logged = useSelector((state) => state.user.logged);

  return (
    <footer className="bg-light">
      <div className="container">
        <div className="pt-5 mt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="navFooter p-0 text-body-secondary">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  {logged && (
                    <Link
                      to="/bibliotheque"
                      className="navFooter p-0 text-body-secondary"
                    >
                      Bibliothèque
                    </Link>
                  )}
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to="/contact"
                    className="navFooter p-0 text-body-secondary"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/mentions-legales"
                    className="navFooter p-0 text-body-secondary"
                  >
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>N'hésitez plus à vous inscrire !</h5>
                <p>
                  Pouvoir trier ta bibliothèque de plusieurs façons différentes
                  et en 1 clic est un must have aujourd’hui !
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <Link
                    to="/inscription"
                    className="btn btn-warning"
                    role="button"
                  >
                    Inscrivez-vous
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
            <p>&copy; 2023 BookMark, Inc. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
