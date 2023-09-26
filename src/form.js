import React, { useState } from "react";
const InputForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [choice, setChoice] = useState(""); // Changed from stringValue
  const [count, setCount] = useState("");
  const [formColor, setFormColor] = useState("#8460e742");
  return (
    <div className="col-md-8 pe-2 mx-auto">
      <h2>Bahis Ekle</h2>
      <div className="form-group ">
        <input
          type="text"
          className="form-control text-center"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ "background-color": formColor, border: formColor }}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control text-center mt-2"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
          style={{ "background-color": formColor, border: formColor }}
        >
          <option value="">Bahis Seç</option>
          <option value="girl">Kız</option>
          <option value="boy">Erkek</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control text-center mt-2"
          placeholder="Katılım"
          defaultValue={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          style={{ "background-color": formColor, border: formColor }}
        />
      </div>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          onSubmit(name, choice, count);
          setName("");
          setChoice("");
          setCount("");
        }}
      >
        Ekle
      </button>
    </div>
  );
};
export default InputForm;
