import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../../Loader';

import All from './All';
import MenuLeft from './MenuLeft';

import './styles.scss';

function Library() {
  const logged = useSelector((state) => state.user.logged);
  const isLoading = useSelector((state) => state.book.isLoading);

  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container biblio mt-5">
      {isLoading && <Loader />}
      <div className="row">
        <MenuLeft />
        <All />
      </div>
    </div>

  );
}

export default Library;
