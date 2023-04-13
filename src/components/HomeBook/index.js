import book1 from '../../assets/images/book1.jpg';
import book2 from '../../assets/images/book2.jpg';
import book3 from '../../assets/images/book3.jpg';
import book4 from '../../assets/images/book4.jpg';
import './styles.scss';

const HomeBook = () => (

  <div className="row cardbook mt-3">
    <div className="col-sm-3 text-center">
      <div className="card">
        <img src={book1} className="card-img-top" alt="..." />
        <div className="card-body">
          <a href="#" className="btn-book">Ados</a>
        </div>
      </div>
    </div>
    <div className="col-sm-3 text-center">
      <div className="card">
        <img src={book2} className="card-img-top" alt="..." />
        <div className="card-body">
          <a href="#" className="btn-book">Thriller</a>
        </div>
      </div>
    </div>
    <div className="col-sm-3 text-center">
      <div className="card">
        <img src={book3} className="card-img-top" alt="..." />
        <div className="card-body">
          <a href="#" className="btn-book">Jeunesse</a>
        </div>
      </div>
    </div>
    <div className="col-sm-3 text-center">
      <div className="card">
        <img src={book4} className="card-img-top" alt="..." />
        <div className="card-body">
          <a href="#" className="btn-book">Manga</a>
        </div>
      </div>
    </div>
  </div>
);

export default HomeBook;
