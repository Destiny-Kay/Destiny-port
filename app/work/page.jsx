import Button from "../../components/Button"
import styles from "./work.module.css"
import ProjectsContainer from "../../components/ProjectsContainer"
//TODO:: import project data from DB

export default function Dashboard(){
    const projectContent={
        title: 'Music sharing App',
        briefDescription: 'This is a music sharing application that was designed for music enthusiast',
        projectType: 'design'
    }
    const mockSnaps="snaps here"

    return(
        <div className={`${styles.container} ${styles.vw}`}>
            <div>
                <h1 className={styles.largeText}>Explore my  creative space</h1>
                <div className={styles.redCircle}></div> 
                <div className={styles.greenCircle}></div>
                <h1 className={styles.largeText}>
                    <span style={{color: "#F50B8A", }}>U</span>X + CO<span style={{color: "#F50B8A"}}>DEstiny</span>
                </h1>
            </div>
            <ProjectsContainer projectSnaps={mockSnaps} projectContent={projectContent}/>
        </div>


    )
}