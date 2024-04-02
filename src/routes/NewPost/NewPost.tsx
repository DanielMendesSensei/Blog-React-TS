import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import blogFetch from "../../axios/config";

import "./NewPost.css";

const NewPost: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string | undefined>();
  const [body, setBody] = useState<string | undefined>();

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Title and body are required!");
      return;
    }

    const post = { title, body, userId: 1 };

    try {
      await blogFetch.post("/posts", post);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="new-post">
      <h2>Insert new Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Type the title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Content:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Type the Content"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Make Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
