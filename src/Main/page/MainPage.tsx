import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../Utils/Atom/Atom";
import GetListFunction from "../function/GetListFunction";
import Header from "../../Utils/component/Header";

const MainPage: React.FC = () => {
  const navigation = useNavigate();
  const accessToken = useRecoilValue(tokenState);

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

  useEffect(() => {
    GetList();
  });

  return (
    <div>
      <Header />
      <p>main page</p>
    </div>
  );
};

export default MainPage;
