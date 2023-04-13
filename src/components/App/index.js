import Footer from '../Footer';
import Header from '../Header';
import Home from '../Pages/Home';
import Library from '../Pages/Library';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Home /> */}
      <Library />
      <Footer />
    </div>
  );
}

export default App;
