/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import { changeRateField, closeModalRate } from '../../../actions/book';
import FieldText from '../../FieldText';

function ModalRate() {
  const dispatch = useDispatch();
  const modalRate = useSelector((state) => state.book.modalRate);
  const commentaire = useSelector((state) => state.book.commentaire);
  const citation = useSelector((state) => state.book.citation);
  return (
    <Modal
      size="md"
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
          className="settings-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('c\'est le moment de faire ma requête !');
          }}
        >
          <FieldText
            identifier="commentaire"
            placeholder="Commentaire"
            label="commentaire"
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
          <div className="col-12">
            <button type="submit" className="btn btn-warning">Confirmer</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>

  );
}

export default ModalRate;
