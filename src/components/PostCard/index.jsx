import styles from "./PostCard.module.css"
import React from 'react'

export default function PostCard({ post }) {
  return (
    <div className={styles.post}>
        
        <img 
            className={styles.post__banner}
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa do post"
        />

        <h2 className={styles.title}>{post.title}</h2>

        <button className={styles.btn}>Ler</button>

    </div>
  )
}
