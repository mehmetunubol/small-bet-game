function Participants({ participants, ratioAndCounts }) {
  const { girlPower, boyPower } = ratioAndCounts;

  return (
    <div>
      <h2>Katılımcı Listesi</h2>
      <table className="table table-hover table-bordered color-table">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Bahis</th>
            <th>Katılım</th>
            <th>Kazanç</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>
                {participant.name.charAt(0).toUpperCase() +
                  participant.name.slice(1)}
              </td>
              <td>{participant.choice === "girl" ? "Kız" : "Erkek"}</td>
              <td>
                <b>{participant.count}</b> ({parseInt(participant.count * 50)}₺)
              </td>
              <td>
                {(participant.choice === "girl"
                  ? parseInt(participant.count * ((boyPower * 45) / girlPower))
                  : parseInt(
                      participant.count * ((girlPower * 45) / boyPower)
                    )) + parseInt(participant.count * 45)}
                ₺
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Participants;
