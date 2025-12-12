import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

export default function DairyPage() {
  const dairyList = useSelector(
    (state: RootState) => state.translate.dairyList
  );
  return (
    <>
      <div className={styles.wrapper}>
        <h2>My Diary</h2>
        <div className={styles.diaryList}>
          <ul>
            {dairyList.map(({ en, ru }) => (
              <li>
                {en} : {ru}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
