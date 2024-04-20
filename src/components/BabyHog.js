import React from "react";
import { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

//The BabyHog component accepts the three props; name, hobby and eyeColor when rendered
function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(0);
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "+") {
      // Increase weight
      setWeight((w) => w + 1);
    } else if (e.target.name === "-") {
      // Decrease weight
      setWeight((w) => w - 1);
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>
        Eye Color:
        {eyeColor === "normal"
          ? "normal"
          : eyeColor === "sun"
          ? "sun"
          : eyeColor === "blue"
          ? "blue"
          : "glowing"}
      </h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          //img src is gotten from the javascript code depending on the eyeColor value
          src={
            eyeColor === "normal"
              ? normalBaby
              : eyeColor === "sun"
              ? SunBaby
              : eyeColor === "blue"
              ? BlueBaby
              : GlowingBaby
          }
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
