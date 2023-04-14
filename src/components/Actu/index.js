import './styles.scss';

import actu from '../../assets/images/gallica.jpg';

const Actu = () => (

  <div className="card actu">
    <h5 className="titleActu text-center">Actualités</h5>
    <img className="card-img-top" src={actu} alt="Card img cap" />
    <div className="card-body">
      <h6 className="card-title">Gallica numérise 10 millions de documents</h6>
      <p className="card-text">Avec sa bibliothèque numérique, la Bibliothèque nationale de France et ses partenaires sont résolument engagés dans une politique de partage et de diffusion des collections patrimoniales. Lancée en 1997 avec quelques milliers de documents, Gallica s'est considérablement enrichie au fil du temps : à l'occasion de ses vingt-cinq ans d'existence, elle vient de franchir le cap des 10 millions de documents accessibles en ligne.</p>
    </div>
  </div>

);

export default Actu;
