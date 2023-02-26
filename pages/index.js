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
        if (j > 24) { j = j - 24 };
        return j;
    }

    useEffect(() => {
        startTime()
    });


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
            <div className={styles.column}>Under Heavy Development</div>
            <div className={styles.column1}>
                <h1><div id="theLocation" className={styles.clock}>Time in Bandung, Indonesia</div></h1>
                <div id="theTime" className={styles.time}></div>
                <h1 className={styles.date}><div id="theDate"></div></h1>
                <div className={styles.row}>
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
            <div className={styles.column2}>cc</div>
        </div>



    )
}
