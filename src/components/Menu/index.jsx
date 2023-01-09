import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink';
import styles from "./Menu.module.css"

export default function Menu() {

  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/">
          Início
        </MenuLink>
        <MenuLink to="/about">
          Sobre
        </MenuLink>
      </nav>
    </header>
  )
}
