/* eslint-disable jsx-a11y/label-has-associated-control */
import './styles.scss';
import avatar from '../../../assets/images/user-128.png';

const User = () => (
  <div className="container userProfil">
    <div className="row col-12 col-md-6 userRow">
      <div className="col-md-12 text-center">
        <h2>Informations personnelles</h2>
        <img src={avatar} className="img-thumbnail img-fluid" alt="..." />
      </div>

      <form className="row g-3">
        <div className="col-md-12">
          <input
            className="form-control form-control-sm"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="pseudo" className="form-label">Pseudo</label>
              <input type="text" className="form-control" id="pseudo" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-warning">Enregistrer</button>
            </div>
          </div>
        </div>
      </form>

    </div>
  </div>

);

export default User;
