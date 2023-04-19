import { Link } from 'react-router-dom';
import './styles.scss';

const Banner = () => (
  <>
    <h1 className="titleHome">Bienvenue sur <strong>BOOKMark</strong>, votre bibliothèque virtuelle</h1>
    <div className="card text-center banner">
      <div className="card-content">
        <p className="card-text">Ranger une bibliothèque est un art. Et comme tout art, il existe une infinité de façons de classer ses livres. Par auteur, par maison d’édition, par collection ou encore par série. Les méthodes de classement sont innombrables et le moins que l’on puisse dire, c’est que les lecteurs ne manquent pas d’imagination pour innover. Et c’est là que BookMark peut être d’une redoutable efficacité.</p>
        <Link className="btn btn-warning btn-lg" to="/inscription" role="button">inscrivez-vous</Link>
      </div>
    </div>
  </>

);

export default Banner;
