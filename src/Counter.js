import { useState } from "react";
import { createContext, useContext } from "react";

const CounterContext = createContext();

//create context
//create parent Component
//child conponent component to help implementing common task
// add child components as properties
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);
  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  console.log(decrease);
  return <button onClick={decrease}>{icon}</button>;
}
function Count() {
  const { count } = useContext(CounterContext);
  return <span> {count}</span>;
}
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
