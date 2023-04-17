/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';
import { closeModal } from '../src/actions/user';

const dispatch = useDispatch;

export const handleClose = () => {
  dispatch(closeModal());
};

export const getBookFromId = (library, id) => library.find((book) => book.id === id);

/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findBook(libraries, searchedId) {
  const book = libraries.find((testedBook) => {
    return testedBook.id === searchedId;
  });
  return book;
}
