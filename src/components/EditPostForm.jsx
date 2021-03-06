import React, { Fragment, useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { useForm } from "../hooks/useForm";

const EditPostForm = ({ editingPost, updatePost }) => {
  const [values, handleChange, reset] = useForm({
    id: editingPost.id,
    title: editingPost.title,
    body: editingPost.body,
  });

  const [error, setError] = useState(false);
  const { title, body } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    updatePost(editingPost.id, values);
    reset();
  };

  return (
    <Fragment>
      <h1 className="display-3">Edit Post</h1>
      <hr className="mb-5" />
      {error && <p className="alert alert-danger p-2 text-center">Todos los campos son obligatorios</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Titulo">Titulo</label>
          <input className="form-control" type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Mensaje</label>
          <input type="text" className="form-control" name="body" value={body} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-info">
          <FaSyncAlt /> &nbsp; Update
        </button>
      </form>
    </Fragment>
  );
};

export default EditPostForm;
