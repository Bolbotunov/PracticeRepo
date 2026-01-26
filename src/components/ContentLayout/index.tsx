import DairyPage from "@/pages/DairyPage";
import PracticePage from "@/pages/PracticePage";
import WordTrainerPage from "@/pages/WordTrainerPage";
import { Route, Routes } from "react-router-dom";

export default function ContentLayout() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<WordTrainerPage />} />
        <Route path="/diary" element={<DairyPage />} />
        <Route path="/practice" element={<PracticePage />} />
      </Routes>
    </main>
  );
}
