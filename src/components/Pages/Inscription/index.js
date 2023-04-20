/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../../../actions/book';
import { createUserInApi } from '../../../actions/user';
import Field from '../../Field';
import './styles.scss';

function Inscription() {
  const dispatch = useDispatch();
  const alias = useSelector((state) => state.user.alias);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const avatar = useSelector((state) => state.user.avatar);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 col-12">
          <h2>Inscription</h2>
          <form
            className="row g-2 inscription"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(createUserInApi());
            }}
          >
            <div className="col-md-6">
              <Field
                identifier="alias"
                placeholder=""
                label="alias"
                value={alias}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-12">
            <Field
              identifier="email"
              placeholder=""
              label="email"
              value={email}
              changeField={(identifier, newValue) => {
                dispatch(changeInput(identifier, newValue));
              }}
            />
            </div>
            <div className="col-12">
            <Field
              identifier="password"
              placeholder=""
              label="password"
              value={password}
              changeField={(identifier, newValue) => {
                dispatch(changeInput(identifier, newValue));
              }}
            />
            </div>
            <div className="col-12">

            <Field
              identifier="avatar"
              placeholder="Coller l'url de votre image"
              label="avatar"
              value={avatar}
              changeField={(identifier, newValue) => {
                dispatch(changeInput(identifier, newValue));
              }}
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
}

export default Inscription;
