import React from "react";
import { ListInterface } from "../types/storage.type";
import Card from "../../../components/atoms/Card";

const PostBox: React.FC<{ post: ListInterface }> = ({ post }) => {
  const {
    referenceSeq,
    referenceUrl,
    createdAt,
    referenceCategory,
    referenceMemo,
    referenceName,
  } = post;

  return (
    <Card>
      <a href={referenceUrl}>{referenceUrl}</a>
      <p>{createdAt}</p>
    </Card>
  );
};
export default PostBox;
