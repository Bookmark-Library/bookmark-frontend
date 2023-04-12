import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import bookMarkLogo from '../../assets/images/logo-BookMark.jpg';

import './styles.scss';

const Header = () => (
  <div>
    <Container>
      <header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
        <img className="logo" src={bookMarkLogo} alt="" />
        <Form className="col-12 col-md-4 mb-2 justify-content-center mb-md-0">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <div className="col-md-3 text-end">
          <button type="button" className="btn me-2 button">Se connecter</button>
          <button type="button" className="btn btn-secondary">S'inscrire</button>
        </div>
      </header>
    </Container>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Bibliothèque</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
