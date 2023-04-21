import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Book from '../Pages/Book';
import Home from '../Pages/Home';
import LegalNotice from '../Pages/LegalNotice';
import Library from '../Pages/Library';
import FormBook from '../Pages/FormBook';

import './styles.scss';
import ModalConnexion from '../Header/ModalConnexion';
import User from '../Pages/User';
import Inscription from '../Pages/Inscription';
import Contact from '../Pages/Contact';
import ModalRate from '../Pages/Book/ModalRate';
// import { getBooksFromApi } from '../../actions/book';
import { fetchUserInfo } from '../../actions/user';
import Finished from '../Pages/Library/Finished';
import Purchased from '../Pages/Library/Purchased';
import Favorite from '../Pages/Library/Favorite';
import Wishlist from '../Pages/Library/Wishlist';
import SuccessModal from '../SuccessModal';
import Loader from '../Loader';

function App() {
  const showModal = useSelector((state) => state.user.showModal);
  const modalRate = useSelector((state) => state.book.modalRate);
  const isLoading = useSelector((state) => state.book.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getBooksFromApi());
    dispatch(fetchUserInfo());
  }, []);

  return (
    <div className="app">

      <Header />
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/ajout-livre" element={<FormBook />} />
        <Route path="/bibliotheque" element={<Library />} />
        <Route path="/bibliotheque/lus" element={<Finished />} />
        <Route path="/bibliotheque/a-lire" element={<Purchased />} />
        <Route path="/bibliotheque/envies" element={<Wishlist />} />
        <Route path="/bibliotheque/favoris" element={<Favorite />} />
        { (!isLoading)
      && (<Route path="/bibliotheque/livre/:id" element={<Book />} />)}
        <Route path="/user/:pseudo" element={<User />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showModal
      && <ModalConnexion />}
      {modalRate && <ModalRate />}
      <Footer />
    </div>
  );
}

export default App;
