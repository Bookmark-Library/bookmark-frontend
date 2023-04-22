/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import Field from 'src/components/Field';

import Modal from 'react-bootstrap/Modal';
import { changeSettingsField, closeModal, submitLogin } from '../../../actions/user';

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
            dispatch(submitLogin());
            console.log('c\'est le moment de faire ma requête !');
          }}
        >
          <Field
            required
            identifier="password"
            placeholder="Mot de passe"
            label="Mot de passe"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSettingsField(identifier, newValue));
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
