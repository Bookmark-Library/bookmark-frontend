import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTabKey, openModalRate } from '../../../../actions/book';

function BookTab() {
  const dispatch = useDispatch();
  const tabkey = useSelector((state) => state.book.tabkey);

  return (
    <div>
      <Tabs activeKey={tabkey} onSelect={(e) => dispatch(changeTabKey(e))}>
        <Tab eventKey="one" title="Commentaire">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            sed enim semper mi congue vestibulum.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor, odit cum officia quam obcaecati minima itaque iure sit
            dolorum est, vel eveniet dignissimos commodi facilis a
            possimus molestiae sint! Minus.
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
          <p>Tab 3</p>
          <Link to="/ajout/bookmark"> modifier</Link>
        </Tab>
        <Tab eventKey="four" title="Note">
          <p>Tab 4</p>
        </Tab>
      </Tabs>
    </div>
  );
}
export default BookTab;
