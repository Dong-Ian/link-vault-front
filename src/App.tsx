import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Login/page/LoginPage";
import LoginLoadingPage from "./Login/page/LoginLoadingPage";
import MainPage from "./Main/page/MainPage";
import ValidatePage from "./Login/page/ValidatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValidatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loading" element={<LoginLoadingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
