/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import Field from 'src/components/Field';

import Modal from 'react-bootstrap/Modal';
import {
  closeModal, submitLogout, updateUser, updateUserPasswordInApi,
} from '../../../actions/user';
import { changeInput } from '../../../actions/book';

function ModalPassword() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.user.showModal);
  const passwordValue = useSelector((state) => state.user.password);
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={() => {
        dispatch(closeModal());
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Nouveau mot de passe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="settings-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateUserPasswordInApi());
            dispatch(updateUser());
            dispatch(submitLogout());
            dispatch(closeModal());
          }}
        >
          <Field
            required
            identifier="password"
            placeholder="ancien mot de passe"
            label="Ancien mot de passe"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              dispatch(changeInput(identifier, newValue));
            }}
            type="password"
          />
          <Field
            required
            identifier="password"
            placeholder="nouveau mot de passe"
            label="Mot de passe"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              dispatch(changeInput(identifier, newValue));
            }}
            type="password"
          />
          <div className="col-12">
            <button type="submit" className="btn btn-warning">Enregistrer</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>

  );
}

export default ModalPassword;
