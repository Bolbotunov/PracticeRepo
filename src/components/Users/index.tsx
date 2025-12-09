import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addTodo, deleteTodo } from "../../store/todoSlice";
import { fetchUsers } from "../../store/usersSlice";

export default function Users() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todoReducer);
  const users = useSelector((state: RootState) => state.usersReducer.users);
  const status = useSelector((state: RootState) => state.usersReducer.status);

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

  const usersHandler = () => {
    dispatch(fetchUsers());
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
      <div>
        <button onClick={usersHandler}>get users</button>
        <ul>
          {status === "pending" && <p>Loading...</p>}
          {status === "failed" && <p>Error loading users</p>}
          {users.map(({ name, email }) => (
            <li>
              {name}: {email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
