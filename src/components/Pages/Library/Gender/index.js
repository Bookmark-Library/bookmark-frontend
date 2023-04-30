import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import book1 from '../../../../assets/images/book1.jpg';

function Gender() {
  const genderlist = useSelector((state) => state.book.gender);
  const { id } = useParams();
  const genderToDisplay = genderlist.find((gender) => gender.id === id);
  // TODO: faire le map de genderToDisplay pour dynamiser l'affichage des genre(décommenter le link)
  return (
    <div className="col-12 col-md-12 ">
      <h2>Nom du genre</h2>
      <div className="row row-cols-1 row-cols-md-6 g-3">
        <div className="col bookCard text-center">
          <div className="card h-100 border-warning">
            {/* <Link to={`/bibliotheque/livre/${gender.book.slug}`}><img src={book1} alt="" />
            </Link> */}
            <img src={book1} alt="" />
            <div className="card-body">
              <h5 className="card-title">L'amour ne suffit plus</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gender;
