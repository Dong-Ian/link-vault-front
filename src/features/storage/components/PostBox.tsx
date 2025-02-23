import React from "react";
import { ListInterface } from "../types/storage.type";
import Card from "../../../components/atoms/Card";

interface PostBoxProps {
  post: ListInterface;
  onClick: () => void;
}

const PostBox: React.FC<PostBoxProps> = ({ post, onClick }) => {
  const {
    referenceSeq,
    referenceUrl,
    createdAt,
    referenceCategory,
    referenceMemo,
    referenceName,
  } = post;

  return (
    <Card onClick={onClick}>
      <a href={referenceUrl}>{decodeURIComponent(referenceUrl)}</a>
      <p>{createdAt}</p>
    </Card>
  );
};
export default PostBox;
