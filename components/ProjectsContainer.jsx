import styles from "./components.module.css"

export default function ProjectsContainer({projectSnaps, projectContent}){
    return(
        <div className={styles.projectsContainerStyling}>
            <div>
                {projectSnaps}
            </div>
            <div>
                <p style={{color: "lightgreen"}}>{projectContent.title}</p>
                <p>{projectContent.briefDescription}</p>
                <p>{projectContent.projectType}</p>
            </div>
        </div>
    )
}