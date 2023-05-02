import './styles.scss';

import { useSelector } from 'react-redux';
// import actu from '../../assets/images/gallica.jpg';

const Actu = () => {
  const actuContent = useSelector((state) => state.book.actu);
  const url = 'http://sandy-bouzid-server.eddi.cloud/projet-02-marque-page-back/public';
  // const url = 'http://sandy-bouzid.vpnuser.lan:8000';
  const image = '/assets/images/avatars/';
  return (
    <aside className="card actu border-light">
      {actuContent.map((actu) => (
        <div key={actu.id}>
          <h5 className="titleActu text-center">Actualités</h5>
          <img className="card-img-top" src={`${url}${image}${actu.image}`} alt="Card img cap" />
          <div className="card-body">
            <h6 className="card-title">{actu.title}</h6>
            <p className="card-text">{actu.content}</p>
          </div>
        </div>
      ))}

    </aside>

  );
};

export default Actu;
