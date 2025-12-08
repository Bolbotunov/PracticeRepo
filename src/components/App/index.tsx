import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.todos);

  return (
    <>
      <div>TODO LIST</div>
      <input /> <button>add task</button>
      <ul>
        {users.map(({ id, text }) => (
          <li>
            {id}: {text} / <button>delete task</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
