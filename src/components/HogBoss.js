import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data";
// import offspring from "../data.js"

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("normal");

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
        {/* our ul has a javascript code so we wrap the code rendering  the list elements in calibrackets; */}
        {offspring.map((child) => (
          //for each child, we render the BabyHog component
          <BabyHog
            key={child.id}
            name={child.name} //sharing the name as propValue to BabyHog the child component of HogBoss
            hobby={child.hobby} //sharing the hobby as propValue to BabyHog the child component of HogBoss
            eyeColor={eyeColor} //sharing the eyecolor value as propValue to BabyHog the child component of HogBoss
          />
        ))}
      </ul>
    </div>
  );
}

export default HogBoss;
