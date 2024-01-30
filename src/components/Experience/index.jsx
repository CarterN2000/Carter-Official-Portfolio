import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import history from '../../data/history.json'

export default function Experience() {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Education & Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                   {skills.map(function(skill, id) {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillContainer}>
                                    <img className={styles.techIcon} src={skill.imageSrc} alt={skill.title}/>
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                   })}
                </div>
                <ul className={styles.history}>
                   {
                    history.map(function(item, id) {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img className={item.organization === 'Cafe Bee You' ? styles.beeYou : styles.historyIcon} src={item.imageSrc} alt={item.organization}/>
                                <div className={styles.historyDetails}>
                                    <h2>{item.role}, {item.organization}</h2>
                                    <p>{item.startDate} - {item.endDate}</p>
                                </div>
                            </li>
                        )
                    })
                   }
                </ul>
            </div>
        </section>
    )
}