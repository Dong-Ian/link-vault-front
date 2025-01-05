import React from "react";

import styles from "../style/login.module.css";
import { Container } from "@mantine/core";

import { generateCodeChallenge } from "../function/generateCodeChallenge";
import { generateCodeVerifier } from "../function/generateCodeVerifiedr";

import sign_up_button from "../../Utils/image/web_neutral_rd_SI@4x.png";

const LoginPage: React.FC = () => {
  const googleLogin = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile+openid&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  };

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.inner}>
          <h1>Link Vault</h1>
        </Container>
      </header>
      <div className={styles.main_box}>
        <h1 className={styles.title}>Link Vault</h1>
        <p className={styles.description}>
          Safely and efficiently manage your important links
        </p>

        <img
          alt="login button"
          onClick={googleLogin}
          className={styles.login_button}
          src={sign_up_button}
        />
      </div>
    </>
  );
};

export default LoginPage;
