import styles from "./NotFound.module.css"
import erro404 from "assets/erro_404.png"

import React from 'react'

export default function NotFound() {
    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                
                <h1 className={styles.title}>Ops! Página não encontrada!</h1>
                
                <p className={styles.paragraph}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragraph}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

                <div className={styles.buttonContainer}>
                    <button>Voltar</button>
                </div>

                <img 
                    className={styles.dogImage} 
                    src={erro404} 
                    alt="Cachorro de óculos vestido como humano" 
                />
            </div>
            <div className={styles.whiteSpace}></div>
        </>        
    )
}
