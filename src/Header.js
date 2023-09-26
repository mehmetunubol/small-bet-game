const Header = ({ forBaby }) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <h1 className="">Cinsiyet Bahis Oyunu</h1>
      </div>
      <div className="col-md-2 ms-auto my-auto">
        <b>Bebek Kasa Birikim: </b>
        {forBaby || 0}₺
      </div>
    </div>
  );
};

export default Header;
