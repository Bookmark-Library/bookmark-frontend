/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';
import { closeModal } from '../src/actions/user';

const dispatch = useDispatch;

export const handleClose = () => {
  dispatch(closeModal());
};
