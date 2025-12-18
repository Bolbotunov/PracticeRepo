import DairyPage from "@/pages/DairyPage";
import WordTrainerPage from "@/pages/WordTrainerPage";
import { Route, Routes } from "react-router-dom";

export default function ContentLayout() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<WordTrainerPage />} />
        <Route path="/diary" element={<DairyPage />} />
      </Routes>
    </main>
  );
}
