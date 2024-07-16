"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handleTagClick }) => (
  <div className="mt-16 prompt_layout">
    {data.map((post) => {
      return <PromptCard key={post._id} post handleTagClick />;
    })}
  </div>
);
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fecthPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fecthPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;