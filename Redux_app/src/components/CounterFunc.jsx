import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const CounterFunc = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.counter.showCounter);

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Functional Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Count</button>
    </main>
  );
};

export default CounterFunc;
