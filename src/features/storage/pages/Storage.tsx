import React, { useEffect, useState } from "react";
import Header from "../../../components/molecules/Header";
import Menu from "../../../components/organisms/Menu";
import getList from "../services/getList.service";
import { ListInterface } from "../types/storage.type";

const Storage: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [list, setList] = useState<ListInterface[]>([]);

  const getListFunction = async () => {
    const result = await getList();
    if (result.code === "0000") {
      setList(result.result);
      return;
    }

    alert("error");
  };

  useEffect(() => {
    getListFunction();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    </div>
  );
};

export default Storage;
