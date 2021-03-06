import { Fragment, useEffect, useState } from "react";
import AddPostForm from "./components/AddPostForm";
import EditPostForm from "./components/EditPostForm";
import ListPost from "./components/ListPost";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Posts from "./components/Posts";
import PostScreen from "./pages/PostScreen";

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
    title: "",
    body: "",
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
    postData.id = uuidv4();
    setPost([...post, postData]);
  };

  const eliminarPost = (id) => {
    const nuevoPost = post.filter((post) => post.id !== id);
    setPost(nuevoPost);
  };

  const editPost = (post) => {
    setEditing(true);
    console.log(post);
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
    setPost(post.map((p) => (p.id === id ? data : p)));
    console.log(post);
  };
  return (
    <Fragment>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/post" element={<PostScreen />}></Route>
        </Routes>
      </Router>
      {/* <div className="container mt-5">
        <header className="App-header">
          {editing ? <EditPostForm editingPost={editingPost} updatePost={updatePost} /> : <AddPostForm crearPost={crearPost} />}
        </header>
        <ListPost post={post} eliminarPost={eliminarPost} editPost={editPost} />
      </div> */}
    </Fragment>
  );
}

export default App;
