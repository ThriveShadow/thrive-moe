import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Background from '../public/vaksin1.png'
import Background1 from '../public/vaksin2.png'

export default function Vaksin() {
  
  return (

    <div id="main">

        <Head>
            <title>Ayo Vaksin</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.vaksinnn}>
            <div className={styles.vaksinn}>
                <Image src={Background} alt="Background" objectFit="cover" />
            </div>
        
            <a href="https://linktr.ee/covid19.go.id">
                <button className={styles.vaksin}>
                    Klik disini
                </button>
            </a>
            <div className={styles.vaksinn}>
                <Image src={Background1} alt="Background" objectFit="cover" />
            </div>
        </div>

        
        <p className={styles.footervaksin}>
            Created by Jason for biology assignment
        </p>

        

      
    </div>
  )
}
  