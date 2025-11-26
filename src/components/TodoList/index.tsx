import { ChangeEvent, useEffect, useState } from "react";
import { store } from "../../store/store";
import styles from "./styles.module.scss";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(store.getState().todo);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setTodos(store.getState().todo));
    return unsubscribe;
  }, []);

  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function addTaskHandler() {
    store.dispatch({ type: "addTask", payload: text });
    setTodos(store.getState().todo);
    setText("");
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    return unsubscribe;
  }

  function deleteTaskHandler(id: number) {
    console.log(store.getState().todo[0].id);
    store.dispatch({ type: "deleteTask", payload: id });
  }

  return (
    <div className={styles.todoContainer}>
      <h3>TOdo List</h3>
      <input onChange={inputHandler} value={text} />
      <button onClick={addTaskHandler}>Add task</button>

      <ul>
        {todos.map((task) => (
          <div key={task.id}>
            <li>{`${task.id})${task.task}`}</li>
            <button onClick={() => deleteTaskHandler(task.id)}>
              Delete task
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
