import { Provider } from "react-redux";
import { store } from "../../store/store";
import Counter from "../Counter";
import Users from "../Users";

import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className={styles.wrapper}>
          <Users />
          <Counter />
        </div>
      </Provider>
    </>
  );
}

export default App;
