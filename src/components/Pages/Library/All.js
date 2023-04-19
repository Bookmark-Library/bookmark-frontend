import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris.svg';

import './styles.scss';

function All() {
  const libraries = useSelector((state) => state.book.libraries);

  return (
    <div className="col-12 col-md-8 col-right">
      <h2>Bibliothèque</h2>
      <div className="divBook d-flex">
        { libraries.map((library) => (
          <div key={library.book.id} className="bookLien col-12 col-md-2 text-center align-items-center">
            <Link to={`/bibliotheque/livre/${library.book.id}`}><img src={library.book.image} className="img-thumbnail img-fluid" alt="..." /></Link>
            {library.favorite && <img className="bookHeart" src={bookHeart} alt="" />}
            <div>{library.book.title}</div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default All;
