import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addTodo, deleteTodo } from "../../store/todoSlice";

export default function Users() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    dispatch(addTodo(inputText));
    setInputText("");
  };

  const deleteTask = (id: number) => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h3>Users</h3>
      <button onClick={addTask}>add task</button>
      <input onChange={inputHandler} value={inputText} />
      <ul>
        {todos.map(({ id, text, complete }, index) => (
          <li key={id} style={{ display: "flex", gap: "20px" }}>
            <input type="checkbox" checked={complete} />
            {index + 1}: {text} <button onClick={deleteTask(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
