/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import { changeRateField, closeModalRate } from '../../../actions/book';
import FieldText from '../../FieldText';
import RadioRate from './RadioRate';
import CheckboxBookmark from './CheckboxBookmark';

function ModalRate() {
  const dispatch = useDispatch();
  const modalRate = useSelector((state) => state.book.modalRate);
  const commentaire = useSelector((state) => state.book.commentaire);
  const citation = useSelector((state) => state.book.citation);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalRate}
      onHide={() => {
        dispatch(closeModalRate());
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Vos avis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="settings-form g-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('c\'est le moment de faire ma requête !');
          }}
        >
          <FieldText
            identifier="commentaire"
            placeholder="Commentaire"
            label="Commentaire"
            value={commentaire}
            changeField={(identifier, newValue) => {
              dispatch(changeRateField(identifier, newValue));
            }}
          />
          <FieldText
            identifier="citation"
            placeholder="Citation"
            label="Citation"
            value={citation}
            changeField={(identifier, newValue) => {
              dispatch(changeRateField(identifier, newValue));
            }}
          />
          <CheckboxBookmark />
          <RadioRate />

          <Modal.Footer>
            <button type="submit" className="btn btn-warning">Confirmer</button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>

  );
}

export default ModalRate;
