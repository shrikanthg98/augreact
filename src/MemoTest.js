import { useState } from "react";

const Memotest = () => {
  const [increment, setIncrement] = useState(0);

  const complexCalculation = () => {
    let mul = 1;
    console.log(`initial sum value ${mul}`);
    for (let i = 1; i < 4; i++) {
      mul = mul * i;
      console.log("ran");
    }
    console.log("mul calculated again = ", mul);
    return mul;
  };
  const increase = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      <button onClick={increase}>Increment</button>
      <div>{increment}</div>
      <p>{complexCalculation()}</p>
    </div>
  );
};
export default Memotest;
