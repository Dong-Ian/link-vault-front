import React from "react";
import styles from "../styles/login.module.css";
import {
  generateCodeChallenge,
  generateCodeVerifier,
} from "../services/generateCode.service";

import google from "../../../assets/images/google.png";
import Header from "../../../components/molecules/Header";
import Typography from "../../../components/atoms/Typography";
import Image from "../../../components/atoms/Image";

const Login: React.FC = () => {
  const googleLogin = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile+openid&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  };

  return (
    <div className={styles.outer_box}>
      <Header />
      <div className={styles.main_box}>
        <Typography type="Head1">Link Vault</Typography>
        <Typography type="Head2" className={styles.description}>
          Safely and efficiently manage your important links
        </Typography>

        <Image
          alt="login button"
          onClick={googleLogin}
          className={styles.login_button}
          src={google}
        />
      </div>
    </div>
  );
};

export default Login;
