import {
  Button,
  Card,
} from 'react-bootstrap';
import './styles.scss';

const Banner = () => (

  <Card id="banner-img" className="text-center card-sing">
    <Card.Body>
      <Card.Text className="banner-content">
        Optimisez la gestion de votre bibliothèque personnelle avec
        Bookmark - votre nouveau meilleur ami pour suivre vos lectures
        préférées en ligne !
      </Card.Text>
      <Button variant="primary">Inscription</Button>
    </Card.Body>
  </Card>

);

export default Banner;
