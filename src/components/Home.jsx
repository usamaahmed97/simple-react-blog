import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const endPoint = "http://localhost:8000/blogs";
  const { data, isPending } = useFetch(endPoint);
  //const usamaBlogs = blogs.filter((blog) => blog.author === "Usama");

  return (
    <div className="home">
      {isPending ? (
        <div>Loading...</div>
      ) : (
        data && <BlogList title="Top Rated Blogs" blogs={data} />
      )}
    </div>
  );
};

export default Home;
