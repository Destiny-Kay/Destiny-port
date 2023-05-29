import Button from "../../components/Button"
import styles from "./work.module.css"
import ProjectsContainer from "../../components/ProjectsContainer"
import Circle from "../../components/Circle"
import Image from "next/image"
import winkingFace from "../../public/winking_face.png"
import {projects} from '../../data/projects'

export default function Dashboard(){

    return(
        <div className={`${styles.container} `}>
            <div className={styles.containerHero}>
                <h1 className={styles.largeText}>Explore my creative space</h1>
                <Circle radius="113px" bgColor="#F50B8A" top="40vh" left="40vw" />
                <Circle radius="113px" bgColor="#0F7A26" top="40vh" left="50vw" />
                    <Image alt="winking face emoji" src={winkingFace} className={styles.winkingEmoji}/>
                <h1 className={styles.largeText}>
                    <span style={{color: "#F50B8A" }}>U</span>X + CO<span style={{color: "#F50B8A"}}>DEstiny</span>
                </h1>
            </div>

                {
                projects.map((project) => (
                    <ProjectsContainer 
                        key={project.id}
                        image={project.image} 
                        title={project.title}
                        description={project.description} 
                        githuburl={project.githuburl}
                        projectUrl={project.projecturl}
                    />
                )
                )}
        </div>
    )
}