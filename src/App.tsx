import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import LoginLoading from "./pages/LoginLoading";
import Home from "./pages/Home";
import Validate from "./pages/Validate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Validate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loading" element={<LoginLoading />} />
        <Route path="/main" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
