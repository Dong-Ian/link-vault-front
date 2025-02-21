import React, { useState } from "react";
import Header from "../../../components/molecules/Header";
import Menu from "../../../components/organisms/Menu";

const Storage: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <div>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    </div>
  );
};

export default Storage;
