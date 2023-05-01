import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import book1 from '../../../../assets/images/book1.jpg';
import { putIsbnInState, sendBookByIsbn } from '../../../../actions/book';
import { fetchUserInfo, FETCH_USER_INFO, SaveUserInfo } from '../../../../actions/user';

function Gender() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const genderlist = useSelector((state) => state.book.gender);
  const libraries = useSelector((state) => state.book.libraries);
  console.log(genderlist);
  console.log(libraries);
  const genderToDisplay = genderlist.find((gender) => gender.id == id);
  return (
    <div className=" row col-12 col-md-8 ">
      <div className="row row-cols-1 row-cols-md-6 g-3">

        <h2>{genderToDisplay.name}</h2>
        {genderToDisplay.books.map((genderBook) => (

          <div key={genderBook.id} className="col bookCard text-center">
            <div className="card h-100 border-warning">
              <img className="book-image img-fluid" src={genderBook.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{genderBook.title}</h5>
              </div>
              {!libraries.some((book) => book.book.id === genderBook.id) && (

              <div className="card-footer bg-warning">
                <button
                  className="btn btn-warning btn-sm"
                  type="submit"
                  onClick={() => {
                    dispatch(putIsbnInState(genderBook.isbn));
                    dispatch(sendBookByIsbn());
                    dispatch(fetchUserInfo());
                  }}
                > ajouter a ma bibliothèque
                </button>
              </div>
              )}
              {libraries.some((book) => book.book.id === genderBook.id) && (
                <p>Déja dans la bibliothèque</p>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Gender;
