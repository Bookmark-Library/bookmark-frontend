/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import Field from 'src/components/Field';

import Modal from 'react-bootstrap/Modal';
import { changeSettingsField, closeModal } from '../../actions/user';

function ModalConnexion() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.user.showModal);
  const emailValue = useSelector((state) => state.user.email);
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
        <Modal.Title>Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="settings-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('c\'est le moment de faire ma requête !');
          }}
        >
          <Field
            required
            identifier="email"
            placeholder="E-mail"
            label="Email"
            value={emailValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSettingsField(identifier, newValue));
            }}
          />
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
            <button type="submit" className="btn btn-warning">Connexion</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>

  );
}

export default ModalConnexion;
