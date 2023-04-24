import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import All from './All';
import MenuLeft from './MenuLeft';

import './styles.scss';

function Library() {
  const logged = useSelector((state) => state.user.logged);

  // For return at the home page when user is not connected
  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (

    <div className="container biblio mt-5">
      <div className="row">
        <MenuLeft />
        <All />
      </div>
    </div>

  );
}

export default Library;
