/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch;
const libraries = useSelector((state) => state.book.libraries);

// filter for book finished
const filtredByFinished= libraries.filter((book) => book.finished == true);

// filter for book purchased:

const filtredByPurchased

// filter for book favorite:

const filtredByFavorite


const filtredByWishlist
