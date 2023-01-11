import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import styles from "./Post.module.css"
import PostCard from "components/PostCard";

export default function Post() {
   const params = useParams();

   const post = posts.find((post) => {
      return post.id === Number(params.id);
   });

   if (!post) {
      return <NotFound />;
   }

   const filteredPosts = posts.filter((post) => post.id !== Number(params.id))

   function shuffle(arr) {
   
      for (let i = arr.length; i; i--) {
      
         const j = Math.floor(Math.random() * i);
      
         // atribuição via destructuring
         [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
      }
   }   
   
   shuffle(filteredPosts)

   const recomendedPosts = filteredPosts.slice(0, 4)

   // console.log(recomendedPosts)
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

                  <h2 className={styles.otherPostsTitle}>
                     Outros posts que você pode gostar:
                  </h2>

                  <ul className={styles.recomended__posts}>
                     {recomendedPosts.map((post) => (
                        <li key={post.id}>
                           <PostCard post={post}/>
                        </li>
                     ))}
                  </ul>
               </ModelPost>
            }
         />
      </Route>
    </Routes>
  );
}
