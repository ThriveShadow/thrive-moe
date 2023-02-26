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
import { useEffect } from 'react'
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
    document.addEventListener('mousedown', function (event) {
      var side_dom = document.getElementById("mySidenav")
      if (side_dom.style.width == '300px') {
        if (!side_dom.contains(event.target)) {
          closeNav()
        }
      }
    })
  }, [])

  function dropDown() {
    var drop_down = document.getElementById("myDropdown")

    if (drop_down.style.display == 'block') {
      document.getElementById("myDropdown").style.display = "none";
      document.getElementById("myDropdown1").style.display = "none";
    } else {
      document.getElementById("myDropdown").style.display = "block";
      document.getElementById("myDropdown1").style.display = "block";
    }
  }

  function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("title").style.color = "#" + randomColor;
  }

  return (
    <div id="main" className={styles.container}>

      <div className={styles.bgWrap}>
        <Image src={Background} alt="Background" layout="fill" objectFit="cover" />
      </div>

      <Head>
        <title>ThriveShadow</title>
        <meta name="title" content="ThriveShadow"/>
        <meta name="description" content="ThriveShadow's personal site"/>
        <meta name="keywords" content="thriveshadow, thrive, shadow, osu"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
      </Head>

      <div id="mySidenav" className={styles.sidenav}>
        <div className={styles.sidenav_menu}>
          <span onClick={closeNav}>
            Menu 
          </span>
        </div>
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
          <a>Droplets</a>
          <a>Beatrekr</a>
          <a>Project Z</a>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.menu}>
          <span id="burger" onClick={openNav}>&#9776;</span>
        </div>

        <div className={styles.links}>
          <Link href="/">
            Home
          </Link>
          <br></br>
          <Link href="/about">
            About me
          </Link>
          <br></br>
          <Link href="/blog">
            Blog
          </Link>
          <br></br>
          <Link href="/donate">
            Donate
          </Link>
          <br></br>
          <details>
            <summary>
              Projects
            </summary>
            Link
          </details>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title} id="title" onClick={changeColor}>
          ThriveShadow
        </h1>
      </main>

      <footer className={styles.footer}>

        <a href="https://osu.ppy.sh/users/17081783" target="_blank" rel="noreferrer">
          <Image src={osu} alt="osu logo" />
        </a>
        <a href="mailto:contact@thriveshadow.com">
          <Image src={email} alt="email" />
        </a>
        <a href="https://twitter.com/ThriveShadow" target="_blank" rel="noreferrer">
          <Image src={twitter} alt="twitter logo" />
        </a>
        <a href="https://github.com/LazyScriptKiddie" target="_blank" rel="noreferrer">
          <Image src={github} alt="github logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCkINvdWeLZh2EJWgXcvxUPQ" target="_blank" rel="noreferrer">
          <Image src={youtube} alt="youtube logo" />
        </a>


      </footer>

    </div>
  );
}


