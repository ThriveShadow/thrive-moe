import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  function startTime() {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthnames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    let day = weekday[today.getDay()];
    let date = today.getDate();
    let month = monthnames[today.getMonth()];
    let year = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let nyt = today.getUTCHours() - 5;
    let ldn = today.getUTCHours();
    let prs = today.getUTCHours() + 1;
    let mca = today.getUTCHours() + 3;
    let tky = today.getUTCHours() + 9;
    nyt = checkHour(nyt);
    ldn = checkHour(ldn);
    prs = checkHour(prs);
    mca = checkHour(mca);
    tky = checkHour(tky);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("theTime").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("theDate").innerHTML =
      day + ", " + date + " " + month + " " + year;
    document.getElementById("timeNY").innerHTML = nyt + ":" + m;
    document.getElementById("timeLondon").innerHTML = ldn + ":" + m;
    document.getElementById("timeParis").innerHTML = prs + ":" + m;
    document.getElementById("timeMecca").innerHTML = mca + ":" + m;
    document.getElementById("timeTokyo").innerHTML = tky + ":" + m;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function checkHour(j) {
    if (j < 0) {
      j = j + 24;
    }
    if (j > 23) {
      j = j - 24;
    }
    return j;
  }

  function openTab1() {

    document.getElementById("pomo").style.display = "block";
    document.getElementById("short").style.display = "none";
    document.getElementById("long").style.display = "none";
    document.getElementById("pomobutton").style.backgroundColor = "#cac3c3";
    document.getElementById("shortbutton").style.backgroundColor = "inherit";
    document.getElementById("longbutton").style.backgroundColor = "inherit";

  }

  function openTab2() {

    document.getElementById("pomo").style.display = "none";
    document.getElementById("short").style.display = "block";
    document.getElementById("long").style.display = "none";
    document.getElementById("pomobutton").style.backgroundColor = "inherit";
    document.getElementById("shortbutton").style.backgroundColor = "#cac3c3";
    document.getElementById("longbutton").style.backgroundColor = "inherit";

  }

  function openTab3() {

    document.getElementById("pomo").style.display = "none";
    document.getElementById("short").style.display = "none";
    document.getElementById("long").style.display = "block";
    document.getElementById("pomobutton").style.backgroundColor = "inherit";
    document.getElementById("shortbutton").style.backgroundColor = "inherit";
    document.getElementById("longbutton").style.backgroundColor = "#cac3c3";

  }

  function play() {
    var audio = new Audio('/Sounds/alarm.mp3')
    audio.play()
  }
  

  function startTimer(m, s, id) {
    console.log(m + ":" + s)
    var s1 = checkTime(s)
    
    document.getElementById(id).innerHTML = m + ":" + s1;
    
    
    if (s == 0) {
      if (m == 0) {
        play()
        return;
      } else if (m != 0) {
        m = m - 1;
        s = 60;
      }
    }

    s = s - 1;
    setTimeout(() => {startTimer(m, s, id)}, 1000);
    
  }

  useEffect(() => {
    startTime();
    getLocation();
    openTab1();
  });

  var lat;
  var long;
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      latLong = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    lat = position.coords.latitude;
    console.log(lat);
    long = position.coords.longitude;
    console.log(long);
    getWeather(lat, long);
  }

  function getWeather(lat, long) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=383962a4c749186a8ff6cb068526bc5f&units=metric`
    )
      .then((res) => res.json())
      .then((response) => {
        let status = response.weather[0].description;
        let temp = response.main.temp;
        let humidity = response.main.humidity;
        let wind = response.wind.speed;
        let icon = response.weather[0].icon;

        let sunrise = response.sys.sunrise;
        sunrise = sunrise * 1000;
        var sunriseDate = new Date(sunrise);
        let sunriseHour = sunriseDate.getHours();
        let sunriseMin = sunriseDate.getMinutes();
        sunriseMin = checkTime(sunriseMin);

        let sunset = response.sys.sunset;
        sunset = sunset * 1000;
        var sunsetDate = new Date(sunset);
        let sunsetHour = sunsetDate.getHours();
        let sunsetMin = sunsetDate.getMinutes();
        sunsetMin = checkTime(sunsetMin);

        document.getElementById(
          "weatherIcon"
        ).innerHTML = `<Image src="https://openweathermap.org/img/wn/${icon}@4x.png" width="100%">`;
        document.getElementById("theWeather").innerHTML = status;
        document.getElementById("weatherStats").innerHTML =
          "Temp: " +
          temp +
          "°C<br>Humid: " +
          humidity +
          "%<br>Wind: " +
          wind +
          "m/s<br>Sunrise:" +
          sunriseHour +
          ":" +
          sunriseMin +
          "<br>Sunset:" +
          sunsetHour +
          ":" +
          sunsetMin;
      });
  }

  fetch("https://extreme-ip-lookup.com/json/?key=5kJK5Vxj0KKuwIdoKwfJ")
    .then((res) => res.json())
    .then((response) => {
      let city = response.city;
      let country = response.country;
      document.getElementById("theLocation").innerHTML =
        "Time in " + city + ", " + country + ":";
    })
    .catch((data, status) => {
      console.log("Request failed");
    });

  const [news, setNews] = useState(
    Array(3).fill({
      title: "Placeholder ",
      image: "https://placekitten.com/350/199",
      link: "",
    })
  );
  useEffect(() => {
    fetch("https://reader.fcd.im/api/news")
      .then((res) => res.json())
      .then((response) => {
        //setNews(response.news);
        setNews(response.news);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>thrive.moe - A simple productivity site</title>
        <link rel="icon" href="/Images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.title}>
            <p>thrive • moe</p>
          </div>
          <div className={styles.news}>
            <p className={styles.headline}>Top News</p>
            <div className={styles.subheadline}><a href="https://reader.fcd.im/" target="_blank" rel="noreferrer">Powered by 📰⚡ Reader</a></div>

            <div className={styles.newscard}>
              <a href={news[0].link} target="_blank" rel="noreferrer">
                <Image
                  src={news[0].image}
                  alt="Thumbnail"
                  layout="fill"
                  className={styles.img}
                />
                <div className={styles.container}>
                  <div className={styles.newstitle}>{news[0].title}</div>
                </div>
              </a>
            </div>

            <div className={styles.newscard}>
              <a href={news[1].link} target="_blank" rel="noreferrer">
                <Image
                  src={news[1].image}
                  alt="Thumbnail"
                  layout="fill"
                  className={styles.img}
                />
                <div className={styles.container}>
                  <div className={styles.newstitle}>{news[1].title}</div>
                </div>
              </a>
            </div>

            <div className={styles.newscard}>
              <a href={news[2].link} target="_blank" rel="noreferrer">
                <Image
                  src={news[2].image}
                  alt="Thumbnail"
                  layout="fill"
                  className={styles.img}
                />
                <div className={styles.container}>
                  <div className={styles.newstitle}>{news[2].title}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.column1}>
          <div id="theLocation" className={styles.clock}>
            Time in City, Country:
          </div>
          <div id="theTime" className={styles.time}></div>
          <p className={styles.date}>
            <div id="theDate"></div>
          </p>
          <div className={styles.wwtime}>
            <div className={styles.card}>
              <p className={styles.city}>New York</p>
              <p id="timeNY" className={styles.smalltime}></p>
            </div>

            <div className={styles.card}>
              <p className={styles.city}>London</p>
              <p id="timeLondon" className={styles.smalltime}></p>
            </div>

            <div className={styles.card}>
              <p className={styles.city}>Paris</p>
              <p id="timeParis" className={styles.smalltime}></p>
            </div>
            <div className={styles.card}>
              <p className={styles.city}>Mecca</p>
              <p id="timeMecca" className={styles.smalltime}></p>
            </div>
            <div className={styles.card}>
              <p className={styles.city}>Tokyo</p>
              <p id="timeTokyo" className={styles.smalltime}></p>
            </div>
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.weather}>
            <p className={styles.headline}>Weather</p>
            <p className={styles.subheadline}>Source: OpenWeather</p>
            <div className={styles.weathercard}>
              <div className={styles.wcolumn}>
                <div id="weatherIcon" className={styles.wicon}>
                  <Image
                    src="https://imgur.com/T8EPVoV.jpeg"
                    width={300}
                    height={200}
                    alt="weather icon placeholder"
                  />
                </div>
                <div id="theWeather" className={styles.theWeather}>
                  Allow Location
                </div>
              </div>
              <div className={styles.wcolumn1}>
                <div id="weatherStats" className={styles.weatherstats}></div>
              </div>
            </div>
          </div>
          <div className={styles.pomo}>
            <p className={styles.headline}>Pomodoro</p>
            <div className={styles.pomocard}>
              <div className={styles.tab}>

                <button onClick={openTab1} id="pomobutton">Pomodoro</button>
                <button onClick={openTab2} id="shortbutton">Short Break</button>
                <button onClick={openTab3} id="longbutton">Long Break</button>
              </div>

              <div id="pomo" className={styles.tabcontent}>
                <p className={styles.pomoheadline}>Focus on your work! (WIP)</p>
                <div className={styles.timer}>
                  <p id="pomotimer">
                    25:00
                  </p>
                  <button onClick={() => {startTimer(25, 0, "pomotimer")}}>Start</button>

                  <button>Pause</button>
                </div>
              </div>

              <div id="short" className={styles.tabcontent}>
                <p className={styles.pomoheadline}>Grab a coffee?</p>
                <div className={styles.timer}>
                  <p id="shorttimer">
                    5:00
                  </p>
                  <button onClick={() => {startTimer(5, 0, "shorttimer")}}>Start</button>

                  <button>Pause</button>
                </div>
              </div>

              <div id="long" className={styles.tabcontent}>
                <p className={styles.pomoheadline}>Get some fresh air!</p>
                <div className={styles.timer}>
                  <p id="longtimer">
                    20:00
                  </p>
                  <button onClick={() => {startTimer(20, 0, "longtimer")}}>Start</button>

                  <button>Pause</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
