import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../../stores/atom";
import styles from "../styles/home.module.css";
import createReference from "../services/createReference.service";
import Header from "../../../components/molecules/Header";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import Typography from "../../../components/atoms/Typography";

const Home: React.FC = () => {
  const accessToken = useRecoilValue(tokenState);
  const [link, setLink] = useState<string>("");

  const createReferenceFunction = async () => {
    const result = await createReference({
      accessToken: accessToken,
      name: "example name",
      url: link,
      description: "example description",
      category: "example category",
    });
  };

  return (
    <div>
      <Header />
      <div className={styles.main_box}>
        <Typography type="Head1">
          Manage Your Links Effortlessly with AI
        </Typography>
        <Input
          value={link}
          onChange={(e) => setLink((e.target as HTMLInputElement).value)}
          placeholder="요약하고자 하는 링크를 입력하세요"
          className={styles.input}
        />

        <Button
          variant="fill"
          onClick={createReferenceFunction}
          className={styles.button}
        >
          AI 요약하기
        </Button>
      </div>
    </div>
  );
};

export default Home;
