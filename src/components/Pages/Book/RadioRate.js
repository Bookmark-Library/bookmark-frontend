import { useDispatch, useSelector } from 'react-redux';
import { handleRateChange } from '../../../actions/book';

const RadioRate = () => {
  const dispatch = useDispatch();
  const rate = useSelector((state) => state.book.rate);
  return (
    <>
      <p>Notez votre livre</p>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="inlineRadio1">1
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="1"
            checked={rate === 1}
            onChange={(e) => {
              dispatch(handleRateChange(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="inlineRadio2">2
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="2"
            checked={rate === 2}
            onChange={(e) => {
              dispatch(handleRateChange(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="inlineRadio3">3
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="3"
            checked={rate === 3}
            onChange={(e) => {
              dispatch(handleRateChange(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="inlineRadio4">4
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="4"
            checked={rate === 4}
            onChange={(e) => {
              dispatch(handleRateChange(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-check form-check-inline">

        <label className="form-check-label" htmlFor="inlineRadio5">5
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio5"
            value="5"
            checked={rate === 5}
            onChange={(e) => {
              dispatch(handleRateChange(e.target.value));
            }}
          />
        </label>
      </div>
    </>

  );
};

export default RadioRate;
