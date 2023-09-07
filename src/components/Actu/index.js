import "./styles.scss";
import { useSelector } from "react-redux";
/* display of news on the homepage */
const Actu = () => {
  const actuContent = useSelector((state) => state.book.actu);
  // const url = "http://localhost:8000";
  const url = 'https://backoffice.bookmark-application.com.bookmark-application.com';
  const image = "/assets/images/avatars/";

  return (
    <aside className="card actu border-light">
      {actuContent.map((actu) => (
        <div key={actu.id}>
          <h5 className="titleActu text-center">Actualités</h5>
          <img
            className="card-img-top"
            src={`${url}${image}${actu.image}`}
            alt="Card img cap"
          />
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
