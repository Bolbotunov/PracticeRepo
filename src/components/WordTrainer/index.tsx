import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";

import styles from "./styles.module.scss";
import { checkAnswer, fetchWord } from "@/store/translateSlice";

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
        <button onClick={getNewWord}>Get a random word!</button>
        {status === "pending" && <p>Loading...</p>}
        {word && <p>Word: {word}</p>}
        {word && (
          <>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="write translate"
            />
            <button onClick={handleCheck}>Check!</button>
          </>
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
