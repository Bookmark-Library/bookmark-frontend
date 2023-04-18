import { Tab } from 'bootstrap';
import PropTypes from 'prop-types';

import { Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTabKey, openModalRate } from '../../../../actions/book';

function BookTab({
  comment, favorite, finished, purchased, quote, rate, wishlist,
}) {
  const dispatch = useDispatch();
  const tabkey = useSelector((state) => state.book.tabkey);

  return (
    <div>
      <Tabs activeKey={tabkey} onSelect={(e) => dispatch(changeTabKey(e))}>
        <Tab eventKey="one" title="Commentaire">
          <p>
            {comment}
          </p>
          <button
            type="button"
            className=""
            onClick={() => {
              dispatch(openModalRate());
            }}
          >
            Modifier
          </button>
        </Tab>
        <Tab eventKey="two" title="Citation">
          <p>
            {quote}
          </p>
          <button
            type="button"
            className=""
            onClick={() => {
              dispatch(openModalRate());
            }}
          >
            Modifier
          </button>
        </Tab>
        <Tab eventKey="three" title="Bookmark">
          <Link to="/ajout/bookmark"> modifier</Link>
        </Tab>
        <Tab eventKey="four" title="Note">
          <p>{rate}</p>
        </Tab>
      </Tabs>
    </div>
  );
}

BookTab.propTypes = {
  comment: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,
  purchased: PropTypes.bool.isRequired,
  rate: PropTypes.number.isRequired,
  wishlist: PropTypes.bool.isRequired,
};
export default BookTab;
