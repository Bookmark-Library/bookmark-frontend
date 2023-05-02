import { Tab } from 'bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

import { Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTabKey,
} from '../../../../actions/book';

/* display of notation on the book page */
function BookTab({
  comment, quote,
}) {
  const dispatch = useDispatch();
  const tabkey = useSelector((state) => state.book.tabkey);

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
  comment: PropTypes.string,
  quote: PropTypes.string,
};
BookTab.defaultProps = {
  comment: '',
  quote: '',
};
export default BookTab;
