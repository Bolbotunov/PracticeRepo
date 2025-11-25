import { useEffect, useState } from "react";
import { AppStore } from "../../store/store";
import styles from "./styles.module.scss";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const unsubscrube = AppStore.subscribe(() => {
      console.log("state", AppStore.getState());
      setCounter(AppStore.getState().count);
    });
    return unsubscrube;
  }, []);

  function incrementHandle() {
    AppStore.dispatch({ type: "increment" });
  }

  function decrementHandle() {
    AppStore.dispatch({ type: "decrement" });
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
