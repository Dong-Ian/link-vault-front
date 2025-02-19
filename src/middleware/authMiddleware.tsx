import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { tokenState } from "../stores/atom";

const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(tokenState);
  const resetToken = useResetRecoilState(tokenState);

  useEffect(() => {
    const validateUser = async () => {
      if (!accessToken) {
        navigate("/", { replace: true });
        return;
      }
    };

    validateUser();
  }, [accessToken, navigate, resetToken]);

  return <>{children}</>;
};

export default AuthMiddleware;
