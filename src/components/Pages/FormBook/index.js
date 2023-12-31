import { useSelector, useDispatch } from 'react-redux';
import { changeInput, sendBookByIsbn, sendBookCreateInApi } from '../../../actions/book';
import { updateFormErrors } from '../../../actions/user';
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
  const formErrors = useSelector((state) => state.user.formErrors);
  const publicationDate = useSelector((state) => state.book.publicationDate);
  /* ********** Form Verification */
  const errors = {};
  const validateBook = () => {
    // Check required fields
    if (!title.trim()) {
      errors.title = 'Veuillez saisir le titre du livre';
    }
    if (firstname && !lastname) {
      errors.lastname = 'Veuillez rentrer le nom de l\'auteur';
    }
    const priceRegex = /^\d*\.?\d+$|^\d+,\d*$/;
    if (price && !priceRegex.test(price)) {
      errors.price = 'Le champ doit contenir un nombre entier ou décimal.';
    }
    dispatch(updateFormErrors(errors));
  };

  return (

    <div className="container divInscription">
      <div className="container text-center titleAdd">Entrez l'ISBN du livre <strong>OU</strong> remplissez le formulaire d'ajout</div>
      <div className="row justify-content-around mt-5">
        <div className="col-md-6 col-12  text-center">
          <form
            className="row  g-2 col-md-6 offset-md-3"
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(sendBookByIsbn());
            }}
          >
            <div className="col-12">
              <Field
                identifier="isbn"
                label="ISBN ou code barre"
                placeholder=""
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
            <div className="infoIsbn col-12 mt-5 p-3">
              <p>Point info</p>Pour les livres les plus récents
              l'ISBN correspond bien souvent au code barre.
              <br />Cependant sur des livres plus anciens, il peut être différent du code barre,
              il est donc préférable de le vérifier
              sur la page d'information au début ou à la fin du livre.

            </div>
          </form>
        </div>
        <div className="col-md-6 col-12">
          <form
            className="row g-2"
            onSubmit={(e) => {
              e.preventDefault();

              validateBook();
              dispatch(sendBookCreateInApi());
            }}
          >
            <div className="col-12">
              <Field
                required
                identifier="title"
                label="Titre *"
                placeholder=""
                className="required"
                value={title}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
              {formErrors.title && <p className="error">{formErrors.title}</p>}

            </div>
            <div className="col-md-6">
              <Field
                identifier="lastname"
                placeholder=""
                label="Nom de l'Auteur *"
                value={lastname}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
              {formErrors.lastname && <p className="error">{formErrors.lastname}</p>}

            </div>
            <div className="col-md-6">
              <Field
                identifier="firstname"
                placeholder=""
                label="Prénom de l'Auteur"
                value={firstname || ''}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="editor"
                placeholder=""
                label="Nom de l'Editeur"
                value={editor || ''}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="collection"
                placeholder=""
                label="Collection"
                value={collection || ''}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-6">
              <Field
                identifier="publicationDate"
                placeholder=""
                label="Année de publication"
                value={publicationDate || ''}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
            </div>
            <div className="col-md-2">
              <Field
                identifier="price"
                placeholder=""
                label="Prix"
                value={price}
                type="text"
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
              {formErrors.price && <p className="error">{formErrors.price}</p>}
            </div>
            <div className="col-md-4 ">
              <Field
                identifier="pages"
                placeholder=""
                label="Nbre de pages"
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
                placeholder=""
                label="Résumé"
                value={summary || ''}
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
