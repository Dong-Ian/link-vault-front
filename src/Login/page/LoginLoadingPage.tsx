import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoginLoadingPage: React.FC = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");

  useEffect(() => {
    if (code) {
      const codeVerifier = localStorage.getItem("code_verifier");

      fetch("https://oauth2.googleapis.com/token", {
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
      })
        .then((res) => res.json())
        .then((data) => {
          return fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          });
        })
        .then((res) => res.json())
        .then((userInfo) => {
          console.log("User Info:", userInfo);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [code]);

  return (
    <div>
      <p>loading page</p>
    </div>
  );
};

export default LoginLoadingPage;
