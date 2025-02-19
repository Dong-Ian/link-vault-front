import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../Utils/Atom/Atom";
import styles from "../style/main.module.css";
import GetListFunction from "../function/GetListFunction";
import CreateReferenceFunction from "../function/CreateReferenceFunction";

import Header from "../../components/molecules/Header";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import Typography from "../../components/atoms/Typography";

const MainPage: React.FC = () => {
  // const navigation = useNavigate();
  const accessToken = useRecoilValue(tokenState);
  const [link, setLink] = useState<string>("");

  const GetList = async () => {
    const result = await GetListFunction({
      accessToken,
      category: "default",
      page: 1,
      pageSize: 5,
    });

    if (result.code.endsWith("001")) {
      // navigation("/", { replace: true });
      return;
    }

    if (result.code === "0000") {
      console.log("success");
    }
  };

  const CreateReference = async () => {
    const result = await CreateReferenceFunction({
      accessToken: accessToken,
      name: "example name",
      url: link,
      description: "example description",
      category: "example category",
    });
  };

  useEffect(() => {
    GetList();
  });

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
          onClick={CreateReference}
          className={styles.button}
        >
          AI 요약하기
        </Button>
      </div>
      <Card>
        <p>hello card</p>
      </Card>
    </div>
  );
};

export default MainPage;
