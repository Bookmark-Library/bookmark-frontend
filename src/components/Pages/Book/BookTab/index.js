import Nav from 'react-bootstrap/Nav';

const BookTab = () => (
  <Nav variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link to="/commentaire">Ajouter un commentaire</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/citation">Ajouter une citation</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/bookmark">Bookmark</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default BookTab;
