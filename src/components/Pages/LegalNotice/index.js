import './styles.scss';
import { Link } from 'react-router-dom';

const LegalNotice = () => (
  <div className="container legalNotice mt-5">
    <div className="col-12 text-center">
      <h2>Mentions légales</h2>

      <h3>Identification</h3>

      <p>
        Les membres du projet Bookmark
      </p>
      <ul>
        <li>Bouzid Sandy</li>
        <li>Finana Laurent</li>
        <li>Evrard Stephanie</li>
        <li>Gelabale kenny</li>
      </ul>
      <p>Cette application a été réalisée dans le cadre d'un projet de fin de formation</p>
      <h3>Propriété intellectuelle de Bookmark :</h3>
      <p>Le site "Bookmark" est protégé par les droits sur la propriété intellectuelle.
        Toute copie, même partielle (texte ou photo) de quelques éléments que
        ce soit est strictement interdite
        sans l'accord préalable des responsables du site.

      </p>
      <p>Données originales téléchargées sur</p>
      <Link
        to="https://api.bnf.fr/api-sru-catalogue-general"
        className="linkRetour"
        target="_blank"
      >
        Notice bibliographique
      </Link>
      -
      <Link
        to="https://github.com/hackathonBnF/hackathon2016/wiki/API-Couverture-Service"
        className="linkRetour"
        target="_blank"
      >
        Image de couverture
      </Link>

    </div>
  </div>
);

export default LegalNotice;
