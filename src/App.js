import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>

      <Counter>
        <Counter.Label> My favourite Counter</Counter.Label>
        <Counter.Decrease icon="-"> </Counter.Decrease>
        <Counter.Count>Count</Counter.Count>
        <Counter.Increase icon="+"> </Counter.Increase>
      </Counter>
      <div>
        <Counter>
          <Counter.Label> My favourite Counter 2</Counter.Label>
          <Counter.Decrease icon="-"> </Counter.Decrease>
          <Counter.Count />
          <Counter.Increase icon="+"> </Counter.Increase>
        </Counter>
      </div>
    </div>
  );
}
