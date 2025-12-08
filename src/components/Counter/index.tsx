import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";
import { RootState } from "../../store/store";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counterReducer.count);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>Counter</div>
      <button onClick={incrementHandler}>PLUS</button>
      <button onClick={decrementHandler}>MINUS</button>
      count: {count}
    </>
  );
}

export default Counter;
