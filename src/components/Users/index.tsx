import { useDispatch, useSelector } from "react-redux";
import {
  countActionDelayPlus,
  countActionPlus,
  flagAction,
} from "../../actions/actions";
import { AppDispatch, RootState } from "../../store/store";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const flag = useSelector((state: RootState) => state.flagReducer.statusFlag);
  const lastUpdate = useSelector((state: RootState) => state.flagReducer.date);
  const count = useSelector((state: RootState) => state.counterReducer);

  function toggleHandler() {
    dispatch(flagAction(new Date()));
  }

  function counterPlus() {
    dispatch(countActionPlus());
  }

  function counterPlusDelay() {
    dispatch(countActionDelayPlus());
  }

  return (
    <div>
      <h3>Users</h3>
      <button onClick={toggleHandler}>toggle FLAG</button>
      <div>flas status: {flag ? "true" : "false"}</div>
      <div>last toggle: {new Date(lastUpdate).toLocaleTimeString()}</div>
      <button onClick={counterPlus}>PLUS</button>
      <div>count: {count}</div>
      <button onClick={counterPlusDelay}>PLUS WITH DELAY</button>
      <div>count with delay: {count}</div>
    </div>
  );
}
