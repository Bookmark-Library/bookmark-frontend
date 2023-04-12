import {
  Card,
} from 'react-bootstrap';
import './styles.scss';

import actu from '../../assets/images/gallica.jpg';

const Actu = () => (

  <Card className="text-center card-sing">
    <Card.Body>
      <Card.Header id="title-actu">Actualité</Card.Header>
      <Card.Img className="img-fluid" src={actu} alt="image actu" />

      <Card.Text>
        Commerce en ligne : se faire livrer un livre coûtera bientôt 3
        euros
      </Card.Text>
      <Card.Text>
        Afin d’inciter les consommateurs à revenir en librairie plutôt
        qu’à commander en ligne, le gouvernement a instauré un tarif
        de livraison minimal à 3 euros. Il sera effectif à partir
        d’octobre 2023, avec un seuil de gratuité fixé à 35 euros.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Actu;
