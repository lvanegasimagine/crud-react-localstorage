import React, { Fragment } from "react";
import Posts from "./Posts";

const ListPost = ({ post, eliminarPost, editPost }) => {
  return (
    <Fragment>
      <div className="jumbotron mt-5">
        {post.length === 0 ? (
          <h3 className="display-4">No hay Post Actualmente</h3>
        ) : (
          <>
            <h2 className="display-5">Lista de Posts</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Mensaje</th>
                  <th>tools</th>
                </tr>
              </thead>
              <tbody>
                {post.map((post) => (
                  <Posts key={post.id} post={post} eliminarPost={eliminarPost} editPost={editPost} />
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default ListPost;
