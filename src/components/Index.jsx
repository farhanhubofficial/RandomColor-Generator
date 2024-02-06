import React from "react";
import { useState } from "react";

function Index() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  
  function randomColorutility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandonHexColor() {
const hex = [1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
let hexColor = "#";
for(let i = 0; i<6; i++ ) {
    hexColor += hex[randomColorutility(hex.length)]
}
console.log(hexColor)
  }
  function handleCreateRandonRgbColor() {

  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandonHexColor
            : handleCreateRandonRgbColor
        }
      >
        Gennerate Random color
      </button>
    </div>
  );
}

export default Index;
