import { Tab } from 'bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

import { Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTabKey, putCommentInState, putQuoteInState,
} from '../../../../actions/book';

function BookTab({
  comment, quote,
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
      </Tabs>
    </div>
  );
}

BookTab.propTypes = {
  comment: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
export default BookTab;
