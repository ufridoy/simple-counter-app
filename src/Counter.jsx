import { useState } from "react";

export default function Counters() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const updateCount = count + 1;
    return setCount(updateCount);
  };

  const handleDecrement = () => {
    const updateCount = count - 1;
    return setCount(updateCount);
  };

  const resetHandler = () => {
    setCount("");
  }

  const [prevCount, setPrevCount] = useState(count);
    const [trend, setTrend] = useState(null);
    if (prevCount !== count) {
      setPrevCount(count);
      setTrend(count > prevCount ? 'increasing' : 'decreasing');
    }

  return (
    <div className="bg-red-100 text-blue-600 p-10 rounded-3xl font-bold">
      <h1>Counter</h1> <br />  <br />
      <button className="bg-blue-400 text-white font-medium text-xl" onClick={handleIncrement}>Increment</button> <br /> <br />

      <h3 className="text-3xl">{count}</h3>  <br />

      <button className="bg-blue-400 text-white font-medium text-xl" onClick={handleDecrement}>Decrement</button> <br />  <br />
        {trend && <p>The count is {trend}</p>}

        <br /> <br />

        <button className="text-white bg-red-400 font-medium text-xl" onClick={resetHandler}>reset</button>
    </div>
  );
};


