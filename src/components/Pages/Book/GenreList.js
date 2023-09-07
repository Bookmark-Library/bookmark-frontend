import { useDispatch, useSelector } from 'react-redux';
import { setGenderId } from '../../../actions/book';

const GenreList = () => {
  const dispatch = useDispatch();
  const listOfGenre = useSelector((state) => state.book.gender);

  const handleSetGenderId = (event) => {
    dispatch(setGenderId(event.target.value));
  };
  return (
    <div className="mt-3 mb-2">
      <select onChange={handleSetGenderId} className="form-select" aria-label=".form-select-sm example">
        <option defaultValue>selectioner un genre</option>
        {listOfGenre.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreList;
