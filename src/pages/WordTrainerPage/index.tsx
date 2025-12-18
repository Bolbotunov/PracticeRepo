import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";

import styles from "./styles.module.scss";
import Button from "@/components/Button";
import {
  checkAnswer,
  fetchWordRequest,
  resetProgress,
} from "@/store/translateSlice";
import { ATTEMPTS_COUNT } from "@/constants/constants";

export default function WordTrainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { word, translation, status, isCorrect, attempts } = useSelector(
    (state: RootState) => state.translate
  );
  const [answer, setAnswer] = useState("");

  const handleCheck = () => {
    if (!answer.trim()) return;
    dispatch(checkAnswer(answer));
    setAnswer("");
  };

  const startGameHandler = () => {
    dispatch(fetchWordRequest());
    if (attempts === ATTEMPTS_COUNT) {
      dispatch(resetProgress());
    }
  };

  const onChangeHandler = (e: any) => {
    setAnswer(e.target.value);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.attempts}>count of words: {attempts} / 3</p>
        <Button handler={startGameHandler} size="small">
          {attempts === ATTEMPTS_COUNT || attempts === 0
            ? "Start game!"
            : "New game"}
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
          <Button
            handler={handleCheck}
            size="small"
            disabled={!answer ? true : false}
          >
            Check answer!
          </Button>
        </div>
      </div>
    </>
  );
}
