import React, { useEffect, useState } from "react";
import styles from "../styles/storage.module.css";
import Header from "../../../components/molecules/Header";
import Menu from "../../../components/organisms/Menu";
import PostBox from "../components/PostBox";
import getList from "../services/getList.service";
import { ListInterface } from "../types/storage.type";
import { useNavigate } from "react-router-dom";

const Storage: React.FC = () => {
  const navigate = useNavigate();
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
    <div className={styles.outer_box}>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div className={styles.main_box}>
        {list.map((post) => (
          <PostBox
            key={post.referenceSeq}
            post={post}
            onClick={() => navigate(`/post/${post.referenceSeq}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Storage;
