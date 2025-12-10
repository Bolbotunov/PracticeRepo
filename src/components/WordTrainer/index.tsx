import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";

import styles from "./styles.module.scss";
import { checkAnswer, fetchWord } from "@/store/translateSlice";
import Button from "../Button";

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
  return (
    <>
      <div className={styles.wrapper}>
        <Button handler={getNewWord} size="small">
          Get a random word!
        </Button>
        {status === "pending" && <p>Loading...</p>}
        {word && <p>Word: {word}</p>}
        {word && (
          <div className={styles.searchContainer}>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="write translate"
              className={styles.searchInput}
            />
            <Button handler={handleCheck} size="small">
              Check answer!
            </Button>
          </div>
        )}
        {isCorrect !== null && (
          <p>
            {isCorrect
              ? "✅ Correct!"
              : `❌ Wrong! Correct translate: ${translation}`}
          </p>
        )}
      </div>
    </>
  );
}
