import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import {FaSave} from 'react-icons/fa'
const AddPostForm = ({ crearPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [error, setError] = useState(false);

  const { title, body } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    crearPost(formData);
    setFormData({
      title: "",
      body: "",
    });
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
