import React from 'react'
import ModelPost from 'components/ModelPost'
import styles from "./About.module.css"
import coverPhoto from "assets/photo_rocket.jpg"
import photoAbout from "assets/photo_about.jpg"

export default function About() {
  return (
      <ModelPost
        coverPhoto={coverPhoto}
        title="Sobre a Empresa"
      >
        <h3 className={styles.subtitle}>
         Um pouco da história da Space Z
        </h3>

        <img 
          src={photoAbout} 
          alt="Foguete realizando pouso bem sucedido após missão"
          className={styles.photoAbout} />

        <p className={styles.paragraph}>
          Space Exploration Technologies Corp., cujo nome comercial é SpaceZ, é uma fabricante estadunidense de sistemas aeroespaciais, transporte espacial e comunicações com sede em Hawthorne, Califórnia. A SpaceZ foi fundada em 2002 por Elon Musk com o objetivo de reduzir os custos de transporte espacial para permitir a colonização de Marte. A SpaceZ fabrica os veículos de lançamento Falcon 9 e Falcon Heavy, vários tipos motores de foguetes, cápsulas de carga Dragon, espaçonaves tripuladas e satélites de comunicação Starlink.
        </p>
        <p className={styles.paragraph}>
          As conquistas da SpaceZ incluem o primeiro foguete de combustível líquido com financiamento privado a alcançar a órbita (Falcon 1 em 2008), a primeira empresa privada a lançar, orbitar e recuperar com sucesso uma espaçonave (Dragon em 2010), a primeira empresa privada a enviar uma espaçonave para a Estação Espacial Internacional (Dragon em 2012), a primeira decolagem vertical e pouso propulsivo vertical para um foguete orbital (Falcon 9 em 2015), a primeira reutilização de um foguete orbital (Falcon 9 em 2017) e a primeira empresa privada para enviar astronautas para a órbita e para a Estação Espacial Internacional (SpaceZ Crew Dragon Demo-2 em 2020). A SpaceZ já lançou e reutilizou a série de foguetes Falcon 9 mais de 100 vezes.
        </p>
        <p className={styles.paragraph}>
          A SpaceZ está desenvolvendo uma megaconstelação de satélite chamada Starlink para fornecer serviço comercial de internet. Em janeiro de 2020, a constelação Starlink se tornou a maior constelação de satélites do mundo. A SpaceZ também está desenvolvendo o Starship, um sistema de lançamento superpesado, totalmente reutilizável e com financiamento privado, para voos espaciais interplanetários. O Starship pretende se tornar o veículo orbital primário da SpaceZ assim que estiver operacional, suplantando a frota Falcon 9, Falcon Heavy e Dragon existentes. O Starship será totalmente reutilizável e terá a maior capacidade de carga útil de qualquer foguete orbital já em sua estreia de seu vôo orbital programado para o primeiro semestre de 2O22
        </p>

      </ModelPost>
  )
}