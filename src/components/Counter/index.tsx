import { useEffect, useState } from "react";
import { store } from "../../store/store";
import styles from "./styles.module.scss";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const unsubscrube = store.subscribe(() => {
      console.log("state", store.getState());
      setCounter(store.getState().counter.count);
    });
    return unsubscrube;
  }, []);

  function incrementHandle() {
    store.dispatch({ type: "increment" });
  }

  function decrementHandle() {
    store.dispatch({ type: "decrement" });
  }

  return (
    <div className={styles.counterContainer}>
      <h3>counter</h3>
      <div>count: {counter}</div>
      <div>
        <button onClick={incrementHandle}>+</button>
        <button onClick={decrementHandle}>-</button>
      </div>
    </div>
  );
}
