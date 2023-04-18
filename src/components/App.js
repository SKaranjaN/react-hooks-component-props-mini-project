import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header(props) {
  return (
    <header>
      <h1>{props.blogName}</h1>
      <About about={props.about} />
    </header>
  );
}

function About(props) {
  const src = props.src ? props.src : "https://via.placeholder.com/215";
  const alt = props.alt ? props.alt : "blog logo";

  return (
    <aside>
      <img src={src} alt={alt} />
      <p>{props.about}</p>
    </aside>
  );
}

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

function Article(props) {
  const { title, date = "January 1, 1970", preview } = props.post;
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
