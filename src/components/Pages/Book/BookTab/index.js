import { Tab } from 'bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

import { Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import bookWish from '../../../../assets/images/wishlist.svg';
import bookHeart from '../../../../assets/images/favoris-01.svg';
import bookLu from '../../../../assets/images/lu.svg';
import bookLire from '../../../../assets/images/lire.svg';
import {
  changeTabKey, putCommentInState, putQuoteInState,
} from '../../../../actions/book';

function BookTab({
  comment, favorite, finished, purchased, quote, rate, wishlist,
}) {
  const dispatch = useDispatch();
  const tabkey = useSelector((state) => state.book.tabkey);

  dispatch(putCommentInState(comment));
  dispatch(putQuoteInState(quote));

  return (
    <div className="tabs">
      <Tabs activeKey={tabkey} onSelect={(e) => dispatch(changeTabKey(e))} className="mb-3" justify>
        <Tab eventKey="one" title="Commentaire">
          <p>
            {comment}
          </p>
        </Tab>
        <Tab eventKey="two" title="Citation">
          <p>
            {quote}
          </p>
        </Tab>
        <Tab eventKey="three" title="Bookmark">
          {favorite && <img className="bookmark" src={bookHeart} alt="" />}
          {wishlist && <img className="bookmark" src={bookWish} alt="" />}
          {finished && <img className="bookmark" src={bookLu} alt="" />}
          {purchased && !finished && <img className="bookmark" src={bookLire} alt="" />}
          {/* {purchased && <img className="bookmark" src={bookAchete} alt="" />} */}
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
