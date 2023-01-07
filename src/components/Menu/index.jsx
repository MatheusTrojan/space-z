import React from 'react'
import styles from "./Menu.module.css"

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <a className={styles.link} href="/">
          Início
        </a>
        <a className={styles.link} href="/about">
          Sobre 
        </a>
      </nav>
    </header>
  )
}
