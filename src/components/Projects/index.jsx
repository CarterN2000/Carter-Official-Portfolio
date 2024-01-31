import styles from './Projects.module.css'
import projects from '../../data/projects.json'

export default function Projects() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                projects.map(function(project, id) {
                    return(
                        <div className={styles.content} key={id}>
                            <img className={styles.image} src={project.imageSrc} alt={project.title} />
                            <h3 className={styles.projTitle}>{project.title}</h3>
                            <p className={styles.desc}>{project.desc}</p>
                            <ul className={styles.techList}>
                                {
                                project.technology.map(function(tech, id) {
                                    return (
                                        <li key={id} className={styles.tech}>{tech}</li>
                                    )
                                })
                                }
                            </ul>
                            <div className={styles.allLinks}>
                                <a className={styles.link} href={project.demo}>Go to App</a>
                                <a className={styles.link} href={project.source}>View the Code</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}