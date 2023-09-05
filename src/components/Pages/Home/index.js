import Actu from '../../Actu';
import Banner from '../../Banner';
import HomeBook from '../../HomeBook';

import './styles.scss';

const Home = () => (
  <section className="container container-flex">
    <div className="row">
      <div className="col-12 col-md-8">
        <Banner />
        <HomeBook />
      </div>
      <div className="col-12 col-md-4">
        <Actu />
      </div>
    </div>
  </section>
);

export default Home;

