import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../Utils/Atom/Atom";
import styles from "../style/main.module.css";
import GetListFunction from "../function/GetListFunction";
import CreateReferenceFunction from "../function/CreateReferenceFunction";

import Header from "../../Utils/component/Header";
import { Button, Input } from "@mantine/core";

const MainPage: React.FC = () => {
  const navigation = useNavigate();
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
      navigation("/", { replace: true });
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
        <p className={styles.description}>
          Manage Your Links Effortlessly with AI
        </p>
        <Input
          className={styles.input}
          size="xl"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="링크를 입력하세요"
        />
        <Button
          color="rgb(150, 150, 150)"
          size="lg"
          className={styles.button}
          onClick={CreateReference}
        >
          AI 요약하기
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
