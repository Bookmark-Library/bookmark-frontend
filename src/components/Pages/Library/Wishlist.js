import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import bookHeart from '../../../assets/images/favoris.svg';
import MenuLeft from './MenuLeft';

import './styles.scss';

function WishList() {
  const libraries = useSelector((state) => state.book.libraries);
  const logged = useSelector((state) => state.user.logged);
  const filtredByWishlist = libraries.filter((book) => book.wishlist === true);

  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container biblio mt-5">
      <div className="row">
        <MenuLeft />
        <div className="col-12 col-md-8 col-right">
          <h2>Mes envies</h2>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {filtredByWishlist
            && filtredByWishlist.map((library) => (
              <div key={library.book.id} className="col bookCard text-center border-warning">
                <div className="card h-100">
                  <Link to={`/bibliotheque/livre/${library.book.id}`}><img src={library.book.image} className="img-fluid" alt="..." /></Link>
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

export default WishList;
