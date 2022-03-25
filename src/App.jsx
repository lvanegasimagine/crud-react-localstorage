import { useEffect, useState } from "react";
import AddPostForm from "./AddPostForm";
import EditPostForm from "./components/EditPostForm";
import ListPost from "./ListPost";

function App() {
  let postIniciales = JSON.parse(localStorage.getItem("posts"));

  if (!postIniciales) {
    postIniciales = [];
  }

  // Array de posts
  const [post, setPost] = useState(postIniciales);
  const [editing, setEditing] = useState(false);
  // Valor a editar
  const [editingPost, setEditingPost] = useState({
    id: null,
    title: '',
    body: '',
  });

  useEffect(() => {
    let postIniciales = JSON.parse(localStorage.getItem("posts"));

    if (postIniciales) {
      localStorage.setItem("posts", JSON.stringify(post));
    } else {
      localStorage.setItem("posts", JSON.stringify([]));
    }
  }, [post]);

  const crearPost = (postData) => {
    setPost([...post, postData]);
  };

  const eliminarPost = (id) => {
    const nuevoPost = post.filter((post) => post.id !== id);
    setPost(nuevoPost);
  };

  const editPost = (post) => {
    setEditing(true);
    setEditingPost({
      id: post.id,
      title: post.title,
      body: post.body,
    });
  };

  const updatePost = (id, data) => {
    setEditing(false);
    console.log(data);
    console.log(id);
    setPost( post.map (p => (p.id === id ? data: p)))
    console.log(post);
  }
  return (
    <div className="container mt-5">
      <header className="App-header">{editing ? <EditPostForm editingPost={editingPost} updatePost={updatePost} /> : <AddPostForm crearPost={crearPost} />}</header>
      <ListPost post={post} eliminarPost={eliminarPost} editPost={editPost} />
    </div>
  );
}

export default App;
