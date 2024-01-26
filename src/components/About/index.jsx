import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.headshot} src="Carter/Carter_Profile_Offical_Headshot.png" alt="Headshot" />
                <ul className={styles.allItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.text}>
                            <h3>Text Here</h3>
                            <p>Explain Here</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.text}>
                            <h3>Text Here</h3>
                            <p>Explain Here</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.text}>
                            <h3>Text Here</h3>
                            <p>Explain Here</p>
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