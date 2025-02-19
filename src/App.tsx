import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./features/login/pages/Login";
import LoginLoading from "./features/login/pages/LoginLoading";
import Home from "./features/home/pages/Home";
import AuthMiddleware from "./middleware/authMiddleware";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoginLoading />} />
        <Route
          path="/main"
          element={
            <AuthMiddleware>
              <Home />
            </AuthMiddleware>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
