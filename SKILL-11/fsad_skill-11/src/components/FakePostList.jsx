import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [userId, setUserId] = useState("");

  const fetchData = () => {
    axios.get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setFiltered(res.data.posts);
      })
      .catch(() => {
        alert("Error fetching posts");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (id) => {
    setUserId(id);
    if (id === "") {
      setFiltered(posts);
    } else {
      setFiltered(posts.filter(post => post.userId === parseInt(id)));
    }
  };

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={fetchData}>Refresh</button>

      <select value={userId} onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {filtered.map(post => (
        <div key={post.id} className="card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;