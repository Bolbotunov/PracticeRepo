import Counter from "../Counter";
import TodoList from "../TodoList";
import Users from "../Users";

import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Counter />
        <TodoList />
        <Users />
      </div>
    </>
  );
}

export default App;
