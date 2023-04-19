/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import './styles.scss';

const Inscription = () => (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 col-12">
      <h2>Inscription</h2>
      <form className="row g-2 inscription">
          <div className="col-md-6">
            <label htmlFor="pseudo" className="form-label required">Pseudo</label>
            <input type="text" required className="form-control" id="pseudo" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label required">Email</label>
            <input type="email" required className="form-control" id="email" />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label required">Mot de passe</label>
            <input type="password" className="form-control" id="author" required />
          </div>
          <div className="col-12">
          <label htmlFor="avatar">Ajouter une image de profil</label>
          <input
            className="form-control form-control-sm"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning">Enregistrer</button>
          </div>
      </form>
      </div>

    </div>
    </div>
);

export default Inscription;
