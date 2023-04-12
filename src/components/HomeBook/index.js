import {
  Card,
  CardGroup,
} from 'react-bootstrap';
import book1 from '../../assets/images/book1.jpg';
import book2 from '../../assets/images/book2.jpg';
import book3 from '../../assets/images/book3.jpg';
import book4 from '../../assets/images/book4.jpg';
import './styles.scss';

const HomeBook = () => (

  <CardGroup>
    <Card>
      <Card.Img variant="top" src={book1} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={book2} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={book4} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={book3} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
    </Card>
  </CardGroup>
);

export default HomeBook;
