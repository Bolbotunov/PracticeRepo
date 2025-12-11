import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";

import styles from "./styles.module.scss";
import { checkAnswer, fetchWord } from "@/store/translateSlice";
import Button from "@/components/Button";

export default function WordTrainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { word, translation, status, isCorrect } = useSelector(
    (state: RootState) => state.translate
  );
  const [answer, setAnswer] = useState("");

  const handleCheck = () => {
    dispatch(checkAnswer(answer));
  };

  const getNewWord = () => {
    dispatch(fetchWord());
  };

  const onChangeHandler = (e: any) => {
    setAnswer(e.target.value);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <Button handler={getNewWord} size="small">
          Get a random word!
        </Button>
        <div
          className={`${styles.wordBlock} ${
            isCorrect === null ? "" : isCorrect ? styles.success : styles.error
          }`}
        >
          {status === "pending" ? <p>Loading...</p> : <p>{word}</p>}
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.result}>
            <p className={isCorrect === null ? styles.hidden : ""}>
              {isCorrect
                ? "✅ Correct!"
                : `❌ Wrong! Correct translate: ${translation}`}
            </p>
          </div>

          <input
            value={answer}
            onChange={onChangeHandler}
            placeholder="write translate"
            className={styles.searchInput}
          />
          <Button handler={handleCheck} size="small">
            Check answer!
          </Button>
        </div>
      </div>
    </>
  );
}
