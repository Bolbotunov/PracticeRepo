import { ChangeEvent, useEffect, useState } from "react";
import { store } from "../../store/store";
import styles from "./styles.module.scss";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(store.getState().todo);
  const [editing, setEditing] = useState<null | number>(null);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setTodos(store.getState().todo));
    return unsubscribe;
  }, []);

  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function addTaskHandler() {
    if (!text.trim()) return;
    if (editing) {
      store.dispatch({
        type: "editTask",
        payload: { id: editing, task: text },
      });
    } else {
      store.dispatch({ type: "addTask", payload: text });
    }
    setTodos(store.getState().todo);
    setText("");
    setEditing(null);
  }

  function deleteTaskHandler(id: number) {
    store.dispatch({ type: "deleteTask", payload: id });
  }

  function editTaskHandler(id: number) {
    const editingValue = todos.find((todo) => todo.id === id);
    if (editingValue) {
      setText(editingValue.task);
    }
    setEditing(id);
  }

  return (
    <div className={styles.todoContainer}>
      <h3>TOdo List</h3>
      <input onChange={inputHandler} value={text} />
      <button onClick={addTaskHandler}>
        {editing ? "edit task" : "add task"}
      </button>

      <ul>
        {todos.map((task, index) => (
          <div key={task.id}>
            <li>{`${index + 1})${task.task}`}</li>
            <button onClick={() => deleteTaskHandler(task.id)}>
              Delete task
            </button>
            <button onClick={() => editTaskHandler(task.id)}>Edit task</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
