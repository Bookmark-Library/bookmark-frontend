import Footer from '../Footer';
import Header from '../Header';
import Book from '../Pages/Book';
import Home from '../Pages/Home';
import LegalNotice from '../Pages/LegalNotice';
import Library from '../Pages/Library';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Home /> */}
      <LegalNotice />
      <Footer />
    </div>
  );
}

export default App;
