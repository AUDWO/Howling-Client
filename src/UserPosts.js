import React, { useEffect, useState } from "react";
import axios from "axios";
import Posting from "./Posting";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8005/page/renderposts"
        );
        console.log("이것은 response입니다.", response.data);
        setPosts((prev) => [...prev, ...response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  if (posts) {
    return (
      <>
        {posts.map((post) => {
          return <Posting post={post} index={post.id} />;
        })}
      </>
    );
  }

  return (
    <>
      <div>안녕</div>
    </>
  );
};

export default UserPosts;
