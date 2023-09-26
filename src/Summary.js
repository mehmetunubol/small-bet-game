const Summary = ({ top }) => {
  return (
    <div>
      {top && (
        <div className="row mt-5 col-md-8 mx-auto shadow">
          <div className=" mx-auto">
            <b>En yüksek bahis veren KAHRAMAN! </b>
          </div>
          <div className="col-md-6 mx-auto">{top}</div>
        </div>
      )}

      <div className="row ">
        <div className="col-md-8 mt-5 mx-auto shadow">
          <h3>Oyun Kuralları</h3>
          <ul className="list-unstyled" style={{ textAlign: "left" }}>
            <li>👶🏻 Katılım ücreti: 50₺</li>
            <li>👶🏻 Katılım sayı sınırı yok.</li>
            <li>
              👶🏻 Her katılımda 5₺ Bebeğe gider. (Kasa her zaman kazanır 😉)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
