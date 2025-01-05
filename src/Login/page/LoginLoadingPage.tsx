import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../../Utils/Atom/Atom";
import LoginFunction from "../function/LoginFunction";

const LoginLoadingPage: React.FC = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");

  const navigation = useNavigate();
  const setToken = useSetRecoilState(tokenState);

  const handleLogin = async () => {
    try {
      if (code) {
        const codeVerifier = localStorage.getItem("code_verifier");

        const tokenResponse = await fetch(
          "https://oauth2.googleapis.com/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID!,
              client_secret: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_SECRET!,
              redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI!,
              grant_type: "authorization_code",
              code,
              code_verifier: codeVerifier!,
            }),
          }
        );

        const tokenData = await tokenResponse.json();

        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
            },
          }
        );

        const userInfo = await userInfoResponse.json();

        const result = await LoginFunction({
          email: userInfo.email,
          name: userInfo.name,
          image: userInfo.picture,
        });

        if (result.code === "0000") {
          setToken(result.accessToken);
          navigation("/main");
        } else {
          alert("로그인에 실패하였습니다.");
          navigation("/");
        }
      }
    } catch (error) {
      alert("로그인에 실패하였습니다.");
      navigation("/");
    }
  };

  useEffect(() => {
    handleLogin();
  }, [code, setToken]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default LoginLoadingPage;
