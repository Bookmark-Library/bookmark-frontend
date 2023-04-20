import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris-01.svg';

import './styles.scss';

function All() {
  const libraries = useSelector((state) => state.book.libraries);

  return (
    <div className="col-12 col-md-8 col-right">
      <h2>Bibliothèque</h2>
      <div className="row row-cols-1 row-cols-md-5 g-3">
        { libraries.map((library) => (
          <div className="col bookCard text-center" key={library.book.id}>
            <div className="card h-100 border-warning">
              <Link
                to={`/bibliotheque/livre/${library.book.id}`}
              >
                <img src={library.book.image} className="img-fluid" alt={library.book.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{library.book.title}</h5>
              </div>
              <div className="card-footer bg-warning">
                {library.favorite && <img className="bookmark" src={bookHeart} alt="" />}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default All;
