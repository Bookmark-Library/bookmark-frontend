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
      <div className="book-content container mt-5">
        <div className="row">
          <div className="book-image col-md-3">
            <h2 className="book-title">{bookToDisplay.book.title}</h2>
            <img className="book-image" src={bookToDisplay.book.image} alt="" />
          </div>
          <div className="book-synopsy d-flex flex-column col-md-9">
            <div className="book-author">
            {bookToDisplay.book.authors.map((author) => (
              <p key={author.lastname} className="book-author">{author.lastname} {author.firstname}</p>
            ))}

            </div>

            <p className="book-editor">{bookToDisplay.book.editor}</p>
            <p className="book-description">{bookToDisplay.book.summary}
            </p>
          </div>
          <BookTab {...bookToDisplay} />
        </div>
      </div>
    </main>

  );
}

export default Book;
