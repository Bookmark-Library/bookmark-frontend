import './styles.scss';

const Footer = () => (
  <footer className="bg-body-tertiary">
    <div className="container">
      <div className="py-5 mt-5">

        <div className="row">
          <div className="col-6 col-md-2 mb-3">

            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Accueil</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Bibliothèque</a></li>

            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3">

            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mentions légales</a></li>

            </ul>
          </div>



          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>N'hésitez plus à vous inscrire !</h5>
              <p>Pouvoir trier ta bibliothèque de plusieurs façons différentes et en 1 clic est un must have aujourd’hui !</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <a className="btn btn-warning" href="#" role="button">Inscrivez-vous</a>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 BookMark, Inc. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
