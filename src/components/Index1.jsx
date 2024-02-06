import React, { useEffect, useState } from "react";

function Index1() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style={{
          flexDirection: "row",
          gap: "20px",
          margin: "20px",
        }}
      >
        <button
          style={{
            background: "#000",
            color: "white",
            fontSize: "50px",
            borderRadius: "90px",
            marginRight: "10px",
          }}
          onClick={() => setTypeColor("hex")}
        >
          Create Hex color
        </button>
        <button
          style={{
            background: "#000",
            color: "white",
            fontSize: "50px",
            borderRadius: "90px",
          }}
          onClick={() => setTypeColor("rgb")}
        >
          Create RGB color
        </button>{" "}
      </div>
      <button
        style={{
          background: "#000",
          color: "white",
          fontSize: "40px",
          borderRadius: "90px",
        }}
        onClick={
          typeColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "35px",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>{typeColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default Index1;
