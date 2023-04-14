import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

function App() {
  const showModal = useSelector((state) => state.user.showModal);
  return (
    <div className="app">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/ajout-livre" element={<FormBook />} />
        <Route path="/bibliotheque" element={<Library />} />
        <Route path="/bibliotheque/livre/:id" element={<Book />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showModal
      && <ModalConnexion />}
      <Footer />
    </div>
  );
}

export default App;
