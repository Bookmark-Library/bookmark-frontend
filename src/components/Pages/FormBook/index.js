import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../../actions/book';
import Field from '../../Field';
import FieldText from '../../FieldText';
import './styles.scss';

function FormBook() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.book.title);
  const lastname = useSelector((state) => state.book.lastname);
  const firstname = useSelector((state) => state.book.firstname);
  const editor = useSelector((state) => state.book.editor);
  const collection = useSelector((state) => state.book.collection);
  const summary = useSelector((state) => state.book.summary);
  const price = useSelector((state) => state.book.price);
  const pages = useSelector((state) => state.book.pages);
  const isbn = useSelector((state) => state.book.isbn);
  const publication_date = useSelector((state) => state.book.publication_date);

  return (

    <div className="container divInscription">
      <div className="container text-center">Entrez l'ISBN du livre ou remplissez le formulaire d'ajout</div>
      <div className="row justify-content-around mt-5">
        <div className="col-md-5 col-12  text-center">
          <form className="row  g-2 col-md-6 offset-md-3">
            <div className="col-12">
              <Field
                identifier="isbn"
                label="ISBN"
                value={isbn}
                type="number"
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
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
                label="Nom de l'Auteur"
                value={lastname}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="firstname"
                label="Prenom de l'Auteur"
                value={firstname}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="editor"
                label="nom de l'Editeur"
                value={editor}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="collection"
                label="Collection"
                value={collection}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            {/* <div className="col-md-6">
            <label htmlFor="genre" className="form-label">Genre</label>
            <select id="genre" className="form-select">
              <option selected>Choix...</option>
              <option>...</option>
            </select>
          </div> */}
            <div className="col-md-6">
              <Field
                identifier="publication_date"
                label="Année "
                value={publication_date}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-2">
              <Field
                identifier="price"
                label="price"
                value={price}
                type="number"
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-4 ">
              <Field
                identifier="pages"
                label="Pages"
                type="number"
                value={pages}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-12">
              <FieldText
                identifier="summary"
                label="Déscription"
                value={summary}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
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
