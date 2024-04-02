import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SkeletonHome from "../../components/Skeletons/SkeletonHome";
import blogFetch, { delay } from "../../axios/config";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      console.log(data);

      await delay(1);

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Hook de efeito
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Latest posts</h1>
      {posts.length === 0
        ? [...Array(10).keys()].map((i) => {
            return <SkeletonHome key={i} />;
          })
        : posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/character/${post.id}`} className="btn">
                Read More
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Home;
