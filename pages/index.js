import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Home() {

    function startTime() {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
        prs = checkHour(prs);
        mca = checkHour(mca);
        tky = checkHour(tky);
        m = checkTime(m);
        s = checkTime(s);

        document.getElementById('theTime').innerHTML = h + ":" + m + ":" + s;
        document.getElementById('theDate').innerHTML = day + ", " + date + " " + month + " " + year;
        document.getElementById('timeNY').innerHTML = nyt + ":" + m;
        document.getElementById('timeLondon').innerHTML = ldn + ":" + m;
        document.getElementById('timeParis').innerHTML = prs + ":" + m;
        document.getElementById('timeMecca').innerHTML = mca + ":" + m;
        document.getElementById('timeTokyo').innerHTML = tky + ":" + m;
        setTimeout(startTime, 1000);
    }


    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }

    function checkHour(j) {
        if (j < 0) { j = j + 24 };
        if (j > 23) { j = j - 24 };
        return j;
    }

    useEffect(() => {
        startTime()
        getLocation()
    });

    var latLong
    var lat
    var long
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
        getWeather(lat,long)
      }

    function getWeather(lat,long) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=383962a4c749186a8ff6cb068526bc5f&units=metric`)
        .then(res => res.json())
        .then(response => {
            let status = response.weather[0].description;
            let temp = response.main.temp;
            let icon = response.weather[0].icon
            console.log(status + " " + temp);

            document.getElementById('weatherIcon').innerHTML = `<Image src="http://openweathermap.org/img/wn/${icon}@4x.png" layout="fill">`;
            document.getElementById('theWeather').innerHTML = status + " " + temp;
            }) 
        }
            
    

    /*fetch('https://extreme-ip-lookup.com/json/?key=5kJK5Vxj0KKuwIdoKwfJ')
        .then(res => res.json())
        .then(response => {
            let city = response.city;
            let country = response.country;
            document.getElementById('theLocation').innerHTML = "Time in " + city + ", " + country;
        })
        .catch((data, status) => {
            console.log('Request failed');
        })
    */

    return (

        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.title}>
                    <h1>thrive • moe</h1>
                </div>
                <div className={styles.news}>
                    <h1>Top News</h1>
                    <div className={styles.newscard}>
                        <Image src="https://placekitten.com/350/200" layout="fill" alt="kitten" className={styles.newsimg}/>
                        <div className={styles.container}>
                            <h4>Lorem Ipsum Stardenburdenhardenbart placeholder here</h4>
                        </div>

                    </div>
                    <div className={styles.newscard}>
                        <Image src="https://placekitten.com/350/201" layout="fill" alt="kitten" className={styles.newsimg}/>
                        <div className={styles.container}>
                            <h4>Lorem Ipsum Stardenburdenhardenbart placeholder here</h4>
                        </div>

                    </div>
                    <div className={styles.newscard}>
                        <Image src="https://placekitten.com/350/199" layout="fill" alt="kitten" className={styles.newsimg}/>
                        <div className={styles.container}>
                            <h4>Lorem Ipsum Stardenburdenhardenbart placeholder here</h4>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.column1}>
                <h1><div id="theLocation" className={styles.clock}>Time in Bandung, Indonesia</div></h1>
                <div id="theTime" className={styles.time}></div>
                <h1 className={styles.date}><div id="theDate"></div></h1>
                <div className={styles.wwtime}>
                    <div className={styles.card}>
                        <h3>New York</h3>
                        <h2 id="timeNY"></h2>
                    </div>
                    <div className={styles.card}>
                        <h3>London</h3>
                        <h2 id="timeLondon"></h2>
                    </div>
                    <div className={styles.card}>
                        <h3>Paris</h3>
                        <h2 id="timeParis"></h2>
                    </div>
                    <div className={styles.card}>
                        <h3>Mecca</h3>
                        <h2 id="timeMecca"></h2>
                    </div>
                    <div className={styles.card}>
                        <h3>Tokyo</h3>
                        <h2 id="timeTokyo"></h2>
                    </div>
                </div>



                <h1 className={styles.date}><div id="timeNY"></div></h1>
            </div>
            <div className={styles.column2}>
                <div className={styles.weather}>
                    <h1>Weather</h1>
                    <div className={styles.weathercard}>
                        <div id="weatherIcon" ><Image src="https://i.imgur.com/fc7RZn9.jpg" width={200} height={200} className={styles.wicon}/></div>
                        <h1 id="theWeather">Allow Location</h1>
                    </div>
                </div>

            </div>
        </div>



    )
}
