import './styles.scss';

const LegalNotice = () => (
  <section className="container">
    <div className="row">
      <div className=" col-md-8">
        <h2 className="ln-title">Mention légal</h2>

      </div>
      <div className="ln-content col-md-10">
        <div className="ln-description">
          <h3>Identification</h3>

          <p>
            Bookmark

            Représentée par la team Marque page:
          </p>
          <ul>
            <li>Bouzid Sandy</li>
            <li>Finana Laurent</li>
            <li>Evrard Stephanie</li>
            <li>Gelabale kenny</li>
          </ul>
          <p>Cette application à été réalisé dans le cadre d'un projet de fin de formation</p>
          <h3>Propriété intellectuelle de Bookmark :</h3>
          <p>Le site "Bookmark" est protégé par les droits sur la propriété intellectuelle.
            Toute copie, même partielle (texte ou photo) de quelques éléments que
            ce soit est strictement interdite
            sans l'accord préalable des responsables du site.

</p>
        </div>
      </div>
    </div>
  </section>
);

export default LegalNotice;