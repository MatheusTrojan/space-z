import styles from "./MainButton.module.css"

import React from 'react'

export default function MainButton({ children, tamanho }) {
  return (
    <button className={`
        ${styles.MainBtn}
        ${styles[tamanho]}
    `}>
        {children}
    </button>
  )
}
