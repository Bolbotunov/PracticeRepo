import Counter from "../Counter";
import TodoList from "../TodoList";

import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Counter />
        <TodoList />
      </div>
    </>
  );
}

export default App;
