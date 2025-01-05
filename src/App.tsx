import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Login/page/LoginPage";
import LoginLoadingPage from "./Login/page/LoginLoadingPage";
import MainPage from "./Main/page/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoginLoadingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
