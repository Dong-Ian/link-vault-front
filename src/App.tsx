import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./features/login/pages/Login";
import LoginLoading from "./features/login/pages/LoginLoading";
import Home from "./features/home/pages/Home";
import AuthMiddleware from "./middleware/authMiddleware";
import Storage from "./features/storage/pages/Storage";
import Post from "./features/post/pages/Post";

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
        <Route
          path="/storage"
          element={
            <AuthMiddleware>
              <Storage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/post/:referenceSeq"
          element={
            <AuthMiddleware>
              <Post />
            </AuthMiddleware>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
