import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBookFromId } from '../../../../utils/function';
import BookTab from './BookTab';

import './styles.scss';

function Book() {
  const { id } = useParams();
  const library = useSelector((state) => state.book.library);
  const bookToDisplay = library.find((book) => book.id === id);
  console.log(bookToDisplay);
  return (
    <main className="container">
      <div className="book-content row">
        <div className="book-image col-md-3">
          <h2 className="book-title">{bookToDisplay.title}</h2>
          <img className="book-image" src={bookToDisplay.image} alt="" />

        </div>
        <div className="book-synopsy col-md-8">
          {/* <h4 className="book-author">{book.book.authors}</h4> */}
          <h4 className="book-editor">{bookToDisplay.editor}</h4>
          <p className="book-description">{bookToDisplay.summary}
          </p>
        </div>
        <BookTab />
      </div>
    </main>

  );
}

export default Book;
