import React, { useState } from "react";
import styles from "../styles/home.module.css";
import createReference from "../services/createReference.service";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import Typography from "../../../components/atoms/Typography";
import Header from "../../../components/molecules/Header";
import Menu from "../../../components/organisms/Menu";

const Home: React.FC = () => {
  const [link, setLink] = useState<string>("");
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const createReferenceFunction = async () => {
    const result = await createReference({
      name: "example name",
      url: link,
      description: "example description",
      category: "default",
    });
  };

  return (
    <div className={styles.outer_box}>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div className={styles.main_box}>
        <Typography type="Title">
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
