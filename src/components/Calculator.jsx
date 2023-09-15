import React, { useState } from "react";
import Button from "./Button";
import "../App.css"; // Import your CSS stylesheet here

function Calculator() {
  const operators = {
    backgroundColor: "pink"
  };

  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression));
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        {/* Add more buttons for 0-9, +, -, *, / */}
        <Button value="(" onClick={handleButtonClick} className="bg-pink" />
        <Button value=")" onClick={handleButtonClick} className="operators" />
        <Button value="%" onClick={handleButtonClick} />
        <Button value="AC" onClick={clearExpression} />
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="=" onClick={calculateResult} className="equal-button" />
        <Button value="+" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Calculator;
