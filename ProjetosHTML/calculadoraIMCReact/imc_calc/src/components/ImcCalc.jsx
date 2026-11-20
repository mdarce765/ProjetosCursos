import "./ImcCalc.css";
import Button from "./Button";
import { useState } from "react";

const ImcCalc = ({ calcImc }) => {
  // Previous state
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  //   Limpar inputs
  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  //   Limitar input
  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };
  const handleHeightChange = (e) => {
    setHeight(validDigits(e.target.value));
  };
  const handleWeightChange = (e) => {
    setWeight(validDigits(e.target.value));
  };
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        {/* Inputs */}
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />

            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>

        {/* Botões */}
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
