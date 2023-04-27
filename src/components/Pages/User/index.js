/* eslint-disable jsx-a11y/label-has-associated-control */
import './styles.scss';
// import avatar from '../../../assets/images/user-128.png';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Field from '../../Field';
import { changeInput } from '../../../actions/book';
import {
  deleteUserInApi, openModal, submitLogout, updateUser, updateUserInApi,
} from '../../../actions/user';

const User = () => {
  const dispatch = useDispatch();

  const avatar = useSelector((state) => state.user.avatar);
  const alias = useSelector((state) => state.user.alias);
  const email = useSelector((state) => state.user.email);
  const logged = useSelector((state) => state.user.logged);

  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container userProfil">
      <div className="row col-12 col-md-6 userRow">
        <div className="col-md-12 text-center">

          <h2>Informations personnelles</h2>
          <div className="row">
            <img src={avatar} className="img-thumbnail img-fluid mx-auto d-block" alt="..." />
            <button
              type="button"
              className="btn btn-link"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              Modifier votre mot de passe
            </button>
          </div>
        </div>

        <form className="row g-3">
          <div className="col-md-12">
            <div className="col-md-12">
              <Field
                identifier="avatar"
                placeholder="Coller l'url de votre image"
                label="Avatar"
                value={avatar}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <Field
                  identifier="email"
                  label="Email"
                  placeholder=""
                  value={email}
                  changeField={(identifier, newValue) => {
                    dispatch(changeInput(identifier, newValue));
                  }}
                />
              </div>
              <div className="col-md-6">
                <Field
                  identifier="alias"
                  value={alias}
                  placeholder=""
                  label="Alias"
                  changeField={(identifier, newValue) => {
                    dispatch(changeInput(identifier, newValue));
                  }}
                />
              </div>
              <div className="col-12">
                <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Enregistrer</button>
                <div className="dropdown-menu mr-2">
                  <button
                    type="submit"
                    className="dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(updateUserInApi());
                      dispatch(updateUser());
                      // dispatch(submitLogout());

                      localStorage.setItem('pseudo', alias);
                      localStorage.setItem('email', email);
                    }}
                  >
                    Oui, je veux enregistrer les modifications
                  </button>
                </div>
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Supprimer</button>
                <div className="dropdown-menu">
                  <button
                    type="submit"
                    className="dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteUserInApi());
                      dispatch(submitLogout());
                      localStorage.removeItem('token');
                      localStorage.removeItem('pseudo');
                      localStorage.removeItem('bibliotheque');
                    }}
                  >
                    Oui, je veux supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>

  );
};

export default User;
