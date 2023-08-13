import "./styles.scss";
import { Link } from "react-router-dom";

const LegalNotice = () => (
  <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-8 col-12">
        <h2>Mentions légales</h2>
        <p className="mt-5">
          Conformément aux dispositions des Articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
          numérique, dite L.C.E.N., il est porté à la connaissance des
          utilisateurs et visiteurs, ci-après l""Utilisateur", du site bookmark
          , ci-après le "Site", les présentes mentions légales. La connexion et
          la navigation sur le Site par l’Utilisateur implique acceptation
          intégrale et sans réserve des présentes mentions légales. Ces
          dernières sont accessibles sur le Site à la rubrique « Mentions
          légales »
        </p>
        <h3 className="mt-5">ARTICLE 1 - L'EDITEUR</h3>
        <p className=" mt-3">
          L’édition et la direction de la publication du Site est assurée par
          Bookmark, dont l'adresse e-mail est{" "}
          <strong>team.bookmark.info@gmail.com</strong>.
        </p>
        <h3 className="mt-5">ARTICLE 2 - L'HEBERGEUR</h3>
        <p className=" mt-3">
          L'hébergeur du Site est la société *** , dont le siège social est
          situé au ***** , avec le numéro de téléphone : ***** et l'adresse mail
          *****
        </p>
        <h3 className="mt-5">ARTICLE 3 - ACCES AU SITE</h3>
        <p className=" mt-3">
          Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
          majeure, interruption programmée ou non et pouvant découlant d’une
          nécessité de maintenance. En cas de modification, interruption ou
          suspension du Site, l'Editeur ne saurait être tenu responsable.
        </p>
        <h3 className=" mt-5">ARTICLE 4 - COLLECTE DES DONNEES</h3>
        <p className=" mt-3">
          Le site est exempté de déclaration à la Commission Nationale
          Informatique et Libertés (CNIL) dans la mesure où il ne collecte
          aucune donnée concernant les utilisateurs. Toute utilisation,
          reproduction, diffusion, commercialisation, modification de toute ou
          partie du Site, sans autorisation de l’Editeur est prohibée et pourra
          entraînée des actions et poursuites judiciaires telles que notamment
          prévues par le Code de la propriété intellectuelle et le Code civil.
        </p>
        <h3 className=" mt-5">ARTICLE 5 - RESSOURCE EXTERNE</h3>
        <p className=" mt-3">
          Bookmark utilise l'API de la Bibliothèque Nationale de France (BNF)
          pour obtenir des informations bibliographiques et des notices de
          documents. L'intégration de ces données permet d'enrichir le contenu
          proposé aux utilisateurs et de fournir des références précises.
          L'accès à l'API de la BNF est conforme aux termes et conditions
          établis par la BNF, et nous respectons les politiques de droit
          d'auteur et de confidentialité de la BNF concernant l'utilisation de
          ces données.
        </p>
        <p>Données originales téléchargées sur</p>
        <Link
          to="https://api.bnf.fr/api-sru-catalogue-general"
          className="linkRetour"
          target="_blank"
        >
          Notice bibliographique
        </Link>
        <span> - </span>
        <Link
          to="https://github.com/hackathonBnF/hackathon2016/wiki/API-Couverture-Service"
          className="linkRetour"
          target="_blank"
        >
          Image de couverture
        </Link>
      </div>
    </div>
  </div>
);

export default LegalNotice;

{
  /* <div className="container legalNotice mt-5  justify-content-center">
    <div className="col-md-6 col-12 text-allign mt-5">
      <h2 className="text-center">Mentions légales</h2>
      <p className="mt-5">
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l""Utilisateur", du site bookmark , ci-après le
        "Site", les présentes mentions légales. La connexion et la navigation
        sur le Site par l’Utilisateur implique acceptation intégrale et sans
        réserve des présentes mentions légales. Ces dernières sont accessibles
        sur le Site à la rubrique « Mentions légales »
      </p>
      <h3 className="text-center mt-5">ARTICLE 1 - L'EDITEUR</h3>
      <p className=" mt-3">
        L’édition et la direction de la publication du Site est assurée par
        Bookmark, dont l'adresse e-mail est{" "}
        <strong>team.bookmark.info@gmail.com</strong>.
      </p>
      <h3 className="text-center mt-5">ARTICLE 2 - L'HEBERGEUR</h3>
      <p className=" mt-3">
        L'hébergeur du Site est la société *** , dont le siège social est situé
        au ***** , avec le numéro de téléphone : ***** et l'adresse mail *****
      </p>
      <h3 className="text-center mt-5">ARTICLE 3 - ACCES AU SITE</h3>
      <p className=" mt-3">
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
      </p>
      <h3 className="text-center mt-5">ARTICLE 4 - COLLECTE DES DONNEES</h3>
      <p className=" mt-3">
        Le site est exempté de déclaration à la Commission Nationale
        Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune
        donnée concernant les utilisateurs. Toute utilisation, reproduction,
        diffusion, commercialisation, modification de toute ou partie du Site,
        sans autorisation de l’Editeur est prohibée et pourra entraînée des
        actions et poursuites judiciaires telles que notamment prévues par le
        Code de la propriété intellectuelle et le Code civil.
      </p>
      <h3 className="text-center mt-5">ARTICLE 5 - RESSOURCE EXTERNE</h3>
      <p className=" mt-3">
        Bookmark utilise l'API de la Bibliothèque Nationale de France (BNF) pour
        obtenir des informations bibliographiques et des notices de documents.
        L'intégration de ces données permet d'enrichir le contenu proposé aux
        utilisateurs et de fournir des références précises. L'accès à l'API de
        la BNF est conforme aux termes et conditions établis par la BNF, et nous
        respectons les politiques de droit d'auteur et de confidentialité de la
        BNF concernant l'utilisation de ces données.
      </p>
      <p>Données originales téléchargées sur</p>
      <Link
        to="https://api.bnf.fr/api-sru-catalogue-general"
        className="linkRetour"
        target="_blank"
      >
        Notice bibliographique
      </Link>
      <span> - </span>
      <Link
        to="https://github.com/hackathonBnF/hackathon2016/wiki/API-Couverture-Service"
        className="linkRetour"
        target="_blank"
      >
        Image de couverture
      </Link>
    </div>
  </div> */
}
