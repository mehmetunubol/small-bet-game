function RatioTable({ ratioAndCounts }) {
  const { girlPower, girlRatio, boyPower, boyRatio } = ratioAndCounts;

  return (
    <div className=" text-center justify-content-center">
      <div class="row">
        <div class="">
          <h2> Oranlar</h2>
        </div>
      </div>
      <div class="row">
        <div class="">
          <table className="table table-hover table-bordered color-table">
            <thead>
              <tr>
                <th></th>
                <th>Kız</th>
                <th>Erkek</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-start"> Katılım (bahis sayısı)</th>
                <td>{girlPower ? girlPower : "-"} </td>
                <td>{boyPower ? boyPower : "-"} </td>
              </tr>
              <tr>
                <th className="text-start">Oran: </th> <td>{girlRatio}</td>
                <td>{boyRatio}</td>
              </tr>
              <tr>
                <th className="text-start">50₺ versem ne alırım? </th>{" "}
                <td>{parseInt(45 * girlRatio)}₺</td>
                <td>{parseInt(45 * boyRatio)}₺</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RatioTable;
