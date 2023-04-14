/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import './styles.scss';

const Contact = () => (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 col-12">
      <h2>Contact</h2>
      <p>Vous souhaitez poser des questions au sujet de BookMark,
        nous soumettre des idées, n'hésitez pas à nous contacter !
      </p>
      <form className="row g-2">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="objet" className="form-label">Objet</label>
            <input type="text" className="form-control" id="objet" />
          </div>
          <div className="col-12">
          <label htmlFor="message" className="form-label">Votre message</label>
            <textarea className="form-control" id="message" rows="3" required />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning">Envoyer</button>
          </div>
      </form>
      </div>

    </div>
    </div>
);

export default Contact;
