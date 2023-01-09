import React from 'react'
import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import photo_rocket from "assets/photo_rocket_2.jpg"

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.title}>Space Z</h1>
            <p className={styles.paragraph}>Boas vindas ao site da Space Z! Somos uma empresa dedicada à exploração do vasto universo!</p>
        </div>

        <div className={styles.images}>
            <img 
                className={styles.coloredCircle}
                src={circuloColorido} 
                aria-hidden={true}
            />

            <img 
                className={styles.photo}
                src={photo_rocket} 
                alt="Decolagem de um foguete"
            />  
        </div>
    </div>
  )
}
