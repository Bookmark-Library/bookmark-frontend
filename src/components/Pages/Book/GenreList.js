import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenderId } from '../../../actions/book';

const GenreList = () => {
  const dispatch = useDispatch();
  const listOfGenre = useSelector((state) => state.book.gender);

  const handleSetGenderId = (event) => {
    dispatch(setGenderId(event.target.value));
  };
  return (
    <select onChange={handleSetGenderId} className="form-select form-select-sm" aria-label=".form-select-sm example">
      <option defaultValue>selectioner un genre</option>
      {listOfGenre.map((genre) => (
        <option value={genre.id}>{genre.name}</option>
      ))}
      <option value="publicationDate">date de publication</option>
      <option value="editor">editeur</option>
    </select>
  );
};

export default GenreList;
