import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Background from '../public/background.png'
import osu from '../public/osu50px.png'
import email from '../public/email50px.png'
import twitter from '../public/twitter50px.png'
import github from '../public/github50px.png'
import youtube from '../public/youtube50px.png'
import arrowdown from '../public/arrow-down.png'
import {useEffect} from 'react'
import Link from 'next/link'

export default function Home() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("burger").style.visibility = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("burger").style.visibility = "visible";
  }

  useEffect(() => {
    document.addEventListener('mousedown',function(event){
      var side_dom    = document.getElementById("mySidenav")
      if(side_dom.style.width == '300px'){
              if(!side_dom.contains(event.target)){
                      closeNav()
              }
      }       
    })
  }, [])

  function dropDown() {
    var drop_down = document.getElementById("myDropdown")
    if (drop_down.style.display == 'none'){
      document.getElementById("myDropdown").style.display = "block";
    } else {
      document.getElementById("myDropdown").style.display = "none";
    }
  }
  
  return (
    <div id="main" className={styles.container_about}>
      
      <Head>
        <title>ThriveShadow</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
      </Head>

      <div id="mySidenav" className={styles.sidenav}>
        <a>Menu</a>
        <hr></hr>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About me
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/donate">
          Donate
        </Link>
        <a onClick={dropDown}>Projects</a>
        
        <div id="myDropdown" className={styles.dropdown}>
          <a>Project X</a>
          <a>Project Y</a>
          <a>Project Z</a>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.menu}>
          <span id="burger" onClick={openNav}>&#9776;</span>
        </div>

        <div className={styles.links}>
          <a>About me</a>
          <br></br>
          <a>Blog</a>
          <br></br>
          <a>Donate</a>
          <br></br>
          <a>Projects</a>
        </div>
      </header>

      <footer className={styles.footer}>
        
        <Image src={osu} alt="osu logo" style="float:right"/>
        <Image src={email} alt="email" />
        <Image src={twitter} alt="twitter logo" />
        <Image src={github} alt="github logo" />
        <Image src={youtube} alt="youtube logo" style="float:right"/>
        
      </footer>
      
    </div>
  );
}
  