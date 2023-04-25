import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../../../actions/book';

const CheckboxBookmark = () => {
  const dispatch = useDispatch();
  const finished = useSelector((state) => state.book.finished);
  const purchased = useSelector((state) => state.book.purchased);
  const favorite = useSelector((state) => state.book.favorite);
  const wishlist = useSelector((state) => state.book.wishlist);
  return (

    <>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="finished">Lu
          <input
            className="form-check-input"
            type="checkbox"
            id="finished"
            value={finished}
            checked={finished === true}
            onChange={(e) => {
              dispatch(toggleCheckbox('finished', e.target.checked));
            }}
          />
        </label>
      </div>

      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="purchased">Acheté
          <input
            className="form-check-input"
            type="checkbox"
            id="purchased"
            value={purchased}
            checked={purchased}
            onChange={(e) => {
              dispatch(toggleCheckbox('purchased', e.target.checked));
            }}
          />
        </label>
      </div>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="wishlist">Mes envies
          <input
            className="form-check-input"
            type="checkbox"
            id="wishlist"
            value={wishlist}
            checked={wishlist}
            onChange={(e) => {
              dispatch(toggleCheckbox('wishlist', e.target.checked));
            }}
          />
        </label>
      </div>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="favorite">Coup de coeur
          <input
            className="form-check-input"
            type="checkbox"
            id="favorite"
            value={favorite}
            checked={favorite}
            onChange={(e) => {
              dispatch(toggleCheckbox('favorite', e.target.checked));
            }}
          />
        </label>
      </div>
    </>
  );
};

export default CheckboxBookmark;
