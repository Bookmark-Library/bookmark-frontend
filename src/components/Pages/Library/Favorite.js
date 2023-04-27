import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris-01.svg';
import defaultBook from '../../../assets/images/default-img.jpg';
import MenuLeft from './MenuLeft';

import './styles.scss';

function Favorite() {
  const libraries = useSelector((state) => state.book.libraries);
  const logged = useSelector((state) => state.user.logged);
  const filtredByFavorite = libraries.filter((book) => book.favorite === true);

  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container biblio mt-5">
      <div className="row">
        <MenuLeft />
        <div className="col-12 col-md-8 col-right">
          <h2>Coups de coeur</h2>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {filtredByFavorite
            && filtredByFavorite.map((library) => (
              <div className="col bookCard text-center border-warning" key={library.book.id}>
                <div className="card h-100 border-warning">
                  <Link to={`/bibliotheque/livre/${library.book.slug}`}><img src={library.book.image ? library.book.image : defaultBook} className="img-fluid" alt={library.book.title} /></Link>
                  <div className="card-body">
                    <h5 className="card-title">{library.book.title}</h5>
                  </div>
                  <div className="card-footer bg-warning">
                    <img className="bookmark" src={bookHeart} alt="" />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

  );
}

export default Favorite;
