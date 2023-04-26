import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bookHeart from '../../../assets/images/favoris-01.svg';
import bookWish from '../../../assets/images/wishlist.svg';
import defaultBook from '../../../assets/images/default-img.jpg';
import MenuLeft from './MenuLeft';

import './styles.scss';

function Finished() {
  const libraries = useSelector((state) => state.book.libraries);
  const filtredByFinished = libraries.filter((book) => book.finished === true);

  return (
    <div className="container biblio mt-5">
      <div className="row">
        <MenuLeft />
        <div className="col-12 col-md-8 col-right">
          <h2>Livres lus</h2>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            {filtredByFinished
            && filtredByFinished.map((library) => (
              <div key={library.book.id} className="col bookCard text-center border-warning">
                <div className="card h-100 border-warning">
                  <Link to={`/bibliotheque/livre/${library.book.id}`}><img src={library.book.image ? library.book.image : defaultBook} className="img-fluid" alt={library.book.title} /></Link>
                  <div className="card-body">
                    <h5 className="card-title">{library.book.title}</h5>
                  </div>
                  <div className={library.finished ? 'card-footer bg-warning' : 'card-footer'}>
                    {library.favorite && <img className="bookmark" src={bookHeart} alt="" />}
                    {library.wishlist && <img className="bookmark" src={bookWish} alt="" />}
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

export default Finished;
