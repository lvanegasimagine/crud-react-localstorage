import React, { Fragment, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useForm } from "../hooks/useForm";

const AddPostForm = ({ crearPost }) => {
  const [values, handleChange, reset] = useForm({
    title: "",
    body: "",
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
    crearPost(values);
    reset();
  };

  return (
    <Fragment>
      <h1 className="display-3">Add Post</h1>
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
        <button type="submit" className="btn btn-primary">
          <FaSave />
          &nbsp; Save
        </button>
      </form>
    </Fragment>
  );
};

export default AddPostForm;
