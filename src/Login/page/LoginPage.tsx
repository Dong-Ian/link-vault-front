import React from "react";
import { Button } from "@mantine/core";

const generateCodeVerifier = () => {
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes)
    .map((byte) => String.fromCharCode((byte % 26) + 97)) // a-z 알파벳으로 변환
    .join("");
};

const generateCodeChallenge = async (verifier: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return btoa(String.fromCharCode(...hashArray))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const LoginPage: React.FC = () => {
  const googleLogin = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile+openid&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  };

  return (
    <div>
      <p>login</p>
      <Button onClick={googleLogin}>구글 로그인</Button>
    </div>
  );
};

export default LoginPage;
