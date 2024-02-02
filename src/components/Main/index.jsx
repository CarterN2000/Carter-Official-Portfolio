import styles from './Main.module.css'

export default function Main() {
    return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.intro}>Hi, I'm Carter!</h1>
            <p className={styles.description}>An individual passionate about sports, social connections, and the world of software development, continuously seeking opportunities for personal and professional growth.</p>
            <a className={styles.contact} href="mailto:CarterN2500@gmail.com">Contact Me</a>
        </div>
        <img className={styles.mySprite} src="Carter/Carter-Single-Sprite.png" alt="Carter's Sprite" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    )
}