import { useSelector } from 'react-redux';
// import book1 from '../../assets/images/book1.jpg';
// import book2 from '../../assets/images/book2.jpg';
// import book3 from '../../assets/images/book3.jpg';
// import book4 from '../../assets/images/book4.jpg';
import './styles.scss';

const HomeBook = () => {
  const homeGender = useSelector((state) => state.book.homeGender);

  return (

    <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
      {homeGender.map((gender) => (
        <div key={gender.id} className="col-sm-3 text-center">
          <div className="card border-light h-100">
            <img src={gender.books[0].image} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="#" className="btn-book">{gender.name}</a>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default HomeBook;
