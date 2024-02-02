import styles from './Contact.module.css'

export default function Contact() {
    return(
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact Me!</h2>
                <p>Feel Free to Reach Out!</p>
            </div>
            <ul className={styles.allLinks}>
                <li className={styles.link}>
                    <img src="Contact/emailIcon.png" alt="Email Icon" />
                    <a target='_blank' href="mailto:CarterN2500@gmail.com">Email</a>
                </li>
                <li className={styles.link}>
                    <img src="Contact/linkedinIcon.png" alt="LinkedIn Icon" />
                    <a target='_blank' href="https://www.linkedin.com/in/carternichols/">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src="Contact/githubIcon.png" alt="Github Icon" />
                    <a target='_blank' href="https://github.com/CarterN2000">Github</a>
                </li>
            </ul>
        </footer>
    )
}