import Head from 'next/head'
import Image from "next/image"
import styles from '../styles/Home.module.css'
import Background from '../public/cv.png'

export default function Cv() {
  
  return (

    <div>

        <Head>
            <title>Daftar Riwayat Hidup</title>
            <link rel="icon" href="/email50px.png" />
        </Head>
        
        
        <Image className={styles.cv} src={Background} alt="Background" objectFit="cover" />
        
        
        
        <p className={styles.footervaksin}>
            Dibuat untuk tugas Bahasa Indonesia
        </p>

        

      
    </div>
  )
}
  