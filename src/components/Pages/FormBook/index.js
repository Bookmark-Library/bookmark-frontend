import './styles.scss';

const FormBook = () => (
  <div className="container divInscription">
    <div className="container text-center">Entrez l'ISBN du livre ou remplissez le formulaire d'ajout</div>
    <div className="row justify-content-around mt-5">
      <div className="col-md-5 col-12  text-center">
        <form className="row  g-2 col-md-6 offset-md-3">
          <div className="col-12">
            <label htmlFor="isbn" className="form-label">ISBN</label>
            <input type="text" className="form-control" id="isbn" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning">Ajouter</button>
          </div>
        </form>
      </div>
      <div className="col-md-5 col-12">
        <form className="row g-2">
          <div className="col-md-6">
            <label htmlFor="isbn" className="form-label">ISBN</label>
            <input type="text" className="form-control" id="isbn" />
          </div>
          <div className="col-12">
            <label htmlFor="title" className="form-label">Titre</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="col-12">
            <label htmlFor="author" className="form-label">Auteur</label>
            <input type="text" className="form-control" id="author" />
          </div>
          <div className="col-md-6">
            <label htmlFor="editor" className="form-label">Editeur</label>
            <input type="text" className="form-control" id="editor" />
          </div>
          <div className="col-md-6">
            <label htmlFor="collection" className="form-label">Collection</label>
            <input type="text" className="form-control" id="collection" />
          </div>
          <div className="col-md-6">
            <label htmlFor="genre" className="form-label">Genre</label>
            <select id="genre" className="form-select">
              <option selected>Choix...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="date" className="form-label">Date de publication</label>
            <input type="text" className="form-control" id="date" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Prix</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-warning">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default FormBook;
