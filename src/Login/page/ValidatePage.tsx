import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../Utils/Atom/Atom";
import GetListFunction from "../../Main/function/GetListFunction";

const ValidatePage: React.FC = () => {
  const navigation = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(tokenState);

  const validUser = async () => {
    if (!accessToken) {
      navigation("/login", { replace: true });
      return;
    }

    const result = await GetListFunction({
      accessToken,
      category: "default",
      page: 1,
      pageSize: 10,
    });

    if (result.code === "0000") {
      navigation("/main", { replace: true });
      return;
    }

    setAccessToken("");
    navigation("/login", { replace: true });
  };

  useEffect(() => {
    validUser();
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default ValidatePage;
