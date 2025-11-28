import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { store } from "../../store/store";
import { todoType, userData } from "../../types/types";

export default function Users() {
  const [users, setUsers] = useState(store.getState().users);
  const url = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setUsers(store.getState().users));
    return unsubscribe;
  }, []);

  const fetchUsers = (url: string) => {
    return async (dispatch: Dispatch) => {
      dispatch({ type: "userRequest" });
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        dispatch({ type: "successRequest", payload: data });
      } catch (error) {
        if (error instanceof Error)
          dispatch({ type: "rejectRequest", payload: error.message });
      }
    };
  };

  function fetchUsersHandler() {
    store.dispatch<any>(fetchUsers(url));
  }

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {store.getState().users.error && (
          <p style={{ color: "red" }}>{store.getState().users.error}</p>
        )}
        {store.getState().users.isLoading && <p>LOADING.....</p>}
        {users.users.map(({ id, name, email }) => (
          <li key={id}>
            {name} email: {email}
          </li>
        ))}
      </ul>
      <button onClick={fetchUsersHandler}>get users</button>
    </div>
  );
}
