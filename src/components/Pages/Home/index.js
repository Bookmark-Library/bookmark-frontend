import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import Actu from '../../Actu';
import Banner from '../../Banner';
import HomeBook from '../../HomeBook';

import './styles.scss';

const Home = () => (
  <Container className="home-container">
    <Row xs={8} md={4}>
      <Col xs={12} md={8}>
        <Banner />
        <HomeBook />

      </Col>
      <Col xs={12} md={4}>
        <Actu />

      </Col>
    </Row>
  </Container>
);

export default Home;
