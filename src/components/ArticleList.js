import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const { posts } = props;
    return (
      <main>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </main>
    );
  }
  
  export default ArticleList;