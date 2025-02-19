import React from "react";
import styles from "../styles/login.module.css";
import {
  generateCodeChallenge,
  generateCodeVerifier,
} from "../services/generateCode.service";

import google from "../../../assets/images/google.png";
import Header from "../../../components/molecules/Header";

const Login: React.FC = () => {
  const googleLogin = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile+openid&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  };

  return (
    <>
      <Header />
      <div className={styles.main_box}>
        <h1 className={styles.title}>Link Vault</h1>
        <p className={styles.description}>
          Safely and efficiently manage your important links
        </p>

        <img
          alt="login button"
          onClick={googleLogin}
          className={styles.login_button}
          src={google}
        />
      </div>
    </>
  );
};

export default Login;
