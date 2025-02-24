import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import styles from "../styles/post.module.css";
import getPost from "../services/getPost.service";
import Header from "../../../components/molecules/Header";
import Menu from "../../../components/organisms/Menu";
import { PostInterface } from "../types/post.type";
import Typography from "../../../components/atoms/Typography";
import { ListInterface } from "../../storage/types/storage.type";

const Post: React.FC = () => {
  const { referenceSeq } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostInterface[] | null>([]);
  const [postInfo, setPostInfo] = useState<ListInterface>();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const getPostFunction = async () => {
    if (!referenceSeq) {
      alert("유효하지 않은 게시글입니다.");
      navigate("/main");
      return;
    }
    const result = await getPost({ referenceSeq });

    if (result.code === "0000") {
      setPost(result.summary);
      setPostInfo(result.result);
    }
  };

  useEffect(() => {
    getPostFunction();
  }, []);

  if (post && postInfo) {
    return (
      <div className={styles.outer_box}>
        <Header setIsMenuOpened={setIsMenuOpened} />
        <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
        <div className={styles.main_box}>
          {post.map((block, index) => (
            <div key={index}>
              <MDEditor.Markdown
                source={"### " + block.summaryTitle + "\n" + block.summaryData}
                style={{
                  padding: "15px",
                  lineHeight: "30px",
                }}
              />
            </div>
          ))}
          <Typography type="P1">
            출처: {decodeURIComponent(postInfo.referenceUrl)}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>error</p>
    </div>
  );
};

export default Post;
