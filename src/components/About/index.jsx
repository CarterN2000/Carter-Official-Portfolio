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
                            <p>My skillset includes experience in both frontend and backend development. Personally, I prefer to work in the backend as I enjoy working with databases and APIs, but I can do it all!</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon} src="Fun_Icons/Psychology_Icon_2.png" alt="Icon_2"/>
                        <div className={styles.text}>
                            <h3>I Originally had a Background in Psychology</h3>
                            <p>Before I found my passion for software development, I graduated from SUNY Brockport with a BS in Psychology, plus two minors in Forensic Science and Business Admin. Although software engineering and psychology are very different, I believe having a well rounded background in multiple different fields helps me tackle problems from a unique point of view.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon} src="Fun_Icons/sportsIcon.png" alt="Sports" />
                        <div className={styles.text}>
                            <h3>I Enjoy Living an Active Lifestyle</h3>
                            <p>Although I have a strong passion for full stack development, I also have many other hobbies. I am an avid sports fan, and enjoy spending my free time watching or playing a variety of sports. I also enjoy working out and traveling!</p>
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