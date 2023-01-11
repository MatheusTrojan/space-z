import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  // console.log(post)

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>

        <Route
          index
          element={
            <ModelPost
              coverPhoto={`/assets/posts/${post.id}/capa.png`}
              title={post.title}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>
            </ModelPost>
          }
        />

      </Route>
    </Routes>
  );
}
