import Footer from '../Footer';
import Header from '../Header';
import Book from '../Pages/Book';
import Home from '../Pages/Home';
import LegalNotice from '../Pages/LegalNotice';
import Library from '../Pages/Library';
import FormBook from '../Pages/FormBook';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Home /> */}
      {/* <LegalNotice /> */}
      <FormBook />
      <Footer />
    </div>
  );
}

export default App;
