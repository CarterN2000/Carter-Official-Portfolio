import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import history from '../../data/history.json'

export default function Experience() {
    return (
        <section id='experience' className={styles.container}>
            <h2>Education & Experience</h2>
            <div>
                <div>
                   {skills.map(function(skill, id) {
                        return (
                            <div key={id}>
                                <img className={styles.techIcon} src={skill.imageSrc} alt={skill.title}/>
                                <p>{skill.title}</p>
                            </div>
                        )
                   })}
                </div>
                <ul>
                   {
                    history.map(function(item, id) {
                        return (
                            <li key={id}>
                                <img className={item.organization === 'Cafe Bee You' ? styles.beeYou : styles.historyIcon} src={item.imageSrc} alt={item.organization}/>
                                <div>
                                    <h2>{item.role}, {item.organozation}</h2>
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