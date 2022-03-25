import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const Posts = ({ post, eliminarPost, editPost }) => {
  const { id, title, body } = post;
  return (
    <tr>
      <th>{title}</th>
      <th>{body}</th>
      <th>
        <button className="btn" onClick={() => editPost(post)}>
          <FaPencilAlt />
        </button>
        <button className="btn" onClick={() => eliminarPost(id)}>
          🗑️
        </button>
      </th>
    </tr>
  );
};

export default Posts;
