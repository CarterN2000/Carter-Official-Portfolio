import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.headshot} src="Carter/Carter_Profile_Offical_Headshot.png" alt="Headshot" />
                <ul className={styles.allItems}>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon} src="Fun_Icons/Fullstack_Icon.png" alt="Icon_1"/>
                        <div className={styles.text}>
                            <h3>I am a Full Stack Developer</h3>
                            <p>My skillset includes experience in both frontend and backend development. I primarily work in JavaScript and Python, and my favorite frameworks are React and Django. My favorite aspect about coding is the satisfaction from solving difficult coding problems.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon} src="Fun_Icons/Psychology_Icon_2.png" alt="Icon_2"/>
                        <div className={styles.text}>
                            <h3>I Have a Background in Psychology</h3>
                            <p>I graduated from SUNY Brockport with a BS in Psychology, plus two minors in Forensic Science and Business Administration. I believe having a well rounded background helps me tackle problems from a unique point of view.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon} src="Fun_Icons/sportsIcon.png" alt="Sports" />
                        <div className={styles.text}>
                            <h3>I Enjoy Living an Active Lifestyle</h3>
                            <p>In addition to my passion for full stack development, I enjoy spending my free time watching and playing a variety of sports. I workout about 3-4 times a week, and when I get the opportunity, I enjoy traveling to new places.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}


{/* <div className={styles.headshotContainer}>
<h2 className={styles.title}>About</h2>
<img className={styles.headshot} src="Carter/Carter_Profile_Offical_Headshot.png" alt="Headshot" />
</div> */}