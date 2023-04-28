import './style.scss';

function Gender() {
  return (
    <div className="col-12 col-md-12">
      <h2>Nom du genre</h2>
      <div className="row row-cols-1 row-cols-md-6 g-3">
        <div className="col bookCard text-center">
          <div className="card h-100 border-warning" />
          <div className="card-body">
            <h5 className="card-title">Titre du livre</h5>
          </div>

          <div className="card-footer bg-warning" />
        </div>
      </div>
    </div>
  );
}

export default Gender;
