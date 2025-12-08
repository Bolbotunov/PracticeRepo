import { useDispatch, useSelector } from "react-redux";
import {
  countActionMinus,
  countActionPlus,
  countSagaActionDelayMinus,
  countSagaActionDelayPlus,
  fetchUsersSagaAction,
  flagAction,
} from "../../actions/actions";
import { AppDispatch, RootState } from "../../store/store";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const flag = useSelector((state: RootState) => state.flagReducer.statusFlag);
  const lastUpdate = useSelector((state: RootState) => state.flagReducer.date);
  const count = useSelector((state: RootState) => state.counterReducer);
  const users = useSelector((state: RootState) => state.usersReducer.users);
  const message = useSelector((state: RootState) => state.usersReducer.message);
  const errorMessage = useSelector(
    (state: RootState) => state.usersReducer.errorMessage
  );
  const loading = useSelector(
    (state: RootState) => state.usersReducer.isLoading
  );

  function toggleHandler() {
    dispatch(flagAction(new Date()));
  }

  function counterPlus() {
    dispatch(countActionPlus());
  }
  function counterMinus() {
    dispatch(countActionMinus());
  }

  function counterSagaPlusDelay() {
    dispatch(countSagaActionDelayPlus());
  }

  function counterSagaMinusDelay() {
    dispatch(countSagaActionDelayMinus());
  }

  const getUsers = () => {
    dispatch(fetchUsersSagaAction());
  };

  return (
    <div>
      <h3>Users</h3>
      <button onClick={toggleHandler}>toggle FLAG</button>
      <div>flas status: {flag ? "true" : "false"}</div>
      <div>last toggle: {new Date(lastUpdate).toLocaleTimeString()}</div>
      <button onClick={counterPlus}>PLUS</button>
      <button onClick={counterMinus}>MINUS</button>
      <button onClick={counterSagaPlusDelay}>SAGA PLUS WITH DELAY</button>
      <button onClick={counterSagaMinusDelay}>SAGA PLUS WITH DELAY</button>
      <div>count: {count}</div>
      <button onClick={getUsers}>GET USERS</button>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <p>status message:</p>
          <p style={{ color: "green", fontSize: "25px" }}> {message}</p>
        </div>
        {errorMessage && (
          <div
            style={{
              color: "white",
              backgroundColor: "red",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            {errorMessage}
          </div>
        )}

        {loading ? (
          <p>Loading....</p>
        ) : (
          <ul>
            {users.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
