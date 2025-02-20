import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import valid from "./valid.service";

const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const validateUser = async () => {
    const result = await valid();

    if (result.code === "REC001") {
      // navigate("/");
      console.log("no token");
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  return <>{children}</>;
};

export default AuthMiddleware;
