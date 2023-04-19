import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../../actions/book';
import Field from '../../Field';
import './styles.scss';

function FormBook() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.book.title);
  const lastname = useSelector((state) => state.book.lastname);
  const firstname = useSelector((state) => state.book.firstname);
  return (

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
            <div className="col-12">
              <Field
                identifier="title"
                label="titre"
                value={title}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="lastname"
                label="nom de l'Auteur"
                value={lastname}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="authorFirstName" className="form-label">Prénom de l'Auteur</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="editor" className="form-label">Editeur</label>
              <input type="text" className="form-control" id="editor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="collection" className="form-label">Collection</label>
              <input type="text" className="form-control" id="collection" />
            </div>
            {/* <div className="col-md-6">
            <label htmlFor="genre" className="form-label">Genre</label>
            <select id="genre" className="form-select">
              <option selected>Choix...</option>
              <option>...</option>
            </select>
          </div> */}
            <div className="col-md-6">
              <label htmlFor="publication_date" className="form-label">Année de publication</label>
              <input type="text" className="form-control" id="publication_date" />
            </div>
            <div className="col-md-2">
              <label htmlFor="price" className="form-label">Prix</label>
              <input type="number" className="form-control" id="price" />
            </div>
            <div className="col-md-4">
              <label htmlFor="pages" className="form-label">Nbre pages</label>
              <input type="number" className="form-control" id="pages" />
            </div>
            <div className="col-md-12">
              <label htmlFor="message" className="form-label">Résumé</label>
              <textarea className="form-control" id="summary" rows="3" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-warning">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormBook;
