import book1 from '../../../assets/images/book1.jpg';
import BookTab from './BookTab';

import './styles.scss';

const Book = () => (
  <main className="container">
    <div className="book-content row">
      <div className="book-image col-md-3">
        <h2 className="book-title">Soryan Nesh</h2>
        <img className="book-image" src={book1} alt="" />

      </div>
      <div className="book-synopsy col-md-8">
        <h4 className="book-author">Auteur</h4>
        <h4 className="book-editor">Editeur</h4>
        <p className="book-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Atque voluptatum pariatur, dolore cum, iure ut debitis tenetur,
          praesentium qui possimus ex soluta ipsa saepe
          aliquid itaque ratione obcaecati numquam aut.
        </p>
      </div>
      <BookTab />
    </div>
  </main>
);

export default Book;
