import styles from "./PostCard.module.css"
import React from 'react'
import { Link } from "react-router-dom"
import MainButton from "components/MainButton"

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
          
          <img 
              className={styles.post__banner}
              src={`/assets/posts/${post.id}/capa.png`}
              alt="Imagem de capa do post"
          />

          <h2 className={styles.title}>{post.title}</h2>

          <MainButton>Ler</MainButton>

      </div>    
    </Link>
  )
}
