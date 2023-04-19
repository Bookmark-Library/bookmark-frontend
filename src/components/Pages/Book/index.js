/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookTab from './BookTab';

import './styles.scss';

function Book() {
  const { id } = useParams();
  const libraries = useSelector((state) => state.book.libraries);
  const bookToDisplay = libraries.find((book) => book.book.id == id);
  // console.log(bookToDisplay);
  return (
    <main className="container">
      <div className="book-content row">
        <div className="book-image col-md-3">
          <h2 className="book-title">{bookToDisplay.book.title}</h2>
          <img className="book-image" src={bookToDisplay.book.image} alt="" />

        </div>
        <div className="book-synopsy col-md-8">
          {bookToDisplay.book.authors.map((author) => (
            <h4 key={author.lastname} className="book-author">{author.lastname}{author.firstname}</h4>
          ))}

          <h4 className="book-editor">{bookToDisplay.book.editor}</h4>
          <p className="book-description">{bookToDisplay.book.summary}
          </p>
        </div>
        <BookTab {...bookToDisplay} />
      </div>
    </main>

  );
}

export default Book;
