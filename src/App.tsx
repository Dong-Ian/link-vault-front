import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Login/page/LoginPage";
import LoginLoadingPage from "./Login/page/LoginLoadingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoginLoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
