import React from 'react'
import styles from "./InitialPage.module.css"
import posts from "json/posts.json"
import Post from 'components/Post'

export default function InitialPage() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
  )
}
