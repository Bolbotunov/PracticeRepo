import { ChangeEvent, useEffect, useState } from "react";
import { Dispatch } from "redux";
import { store } from "../../store/store";
import { userData } from "../../types/types";
import styles from "./styles.module.scss";

export default function Users() {
  const [users, setUsers] = useState<userData[]>([]);
  const url = "https://jsonplaceholder.typicode.com/users/";

  function getUsers() {
    return async (dispatch: Dispatch) => {
      dispatch({ type: "getUsersRequest" });
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "getUsersSuccess", payload: data });
      } catch (error) {
        dispatch({ type: "getUsersFail", payload: error });
      }
    };
  }
  useEffect(() => {
    const unsubscribe = store.subscribe(() => setUsers(store.getState().users));
    return unsubscribe;
  }, []);

  function getUsersHandler() {
    store.dispatch<any>(getUsers());
  }

  return (
    <div className={styles.todoContainer}>
      <h3>Users</h3>

      <button onClick={getUsersHandler}>get users</button>

      <ul>
        {users.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
