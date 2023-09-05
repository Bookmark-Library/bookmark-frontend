import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

/* display of gender on the homepage */
const HomeBook = () => {
  const homeGender = useSelector((state) => state.book.homeGender);

  return (

    <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4 mt-2">
      {homeGender.map((gender) => (
        <div key={gender.id} className="col-sm-3 text-center">
          <div className="card border-light h-100">
            <img src={gender.books[0].image} className="card-img-top" alt="..." />
            <div className="card-body" />
            <div className="card-footer bg-light">
              <Link to={`/genre/${gender.id}`} title={gender.name} className="btn-book">{gender.name}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBook;
