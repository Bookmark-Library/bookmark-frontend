import Footer from '../Footer';
import Header from '../Header';
import Book from '../Pages/Book';
import Home from '../Pages/Home';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Home /> */}
      <Book />
      <Footer />
    </div>
  );
}

export default App;
