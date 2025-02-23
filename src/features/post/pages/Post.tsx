import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getPost from "../services/getPost.service";

const Post: React.FC = () => {
  const { referenceSeq } = useParams();
  const navigate = useNavigate();
  const getPostFunction = async () => {
    if (!referenceSeq) {
      alert("유효하지 않은 게시글입니다.");
      navigate("/main");
      return;
    }
    const result = await getPost({ referenceSeq });
  };

  useEffect(() => {
    getPostFunction();
  });

  return (
    <div>
      <p>post</p>
    </div>
  );
};

export default Post;
