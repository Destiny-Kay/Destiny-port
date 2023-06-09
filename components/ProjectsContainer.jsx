"use client"
import Link from "next/link"
import styles from "./components.module.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import Image from 'next/image'

export default function ProjectsContainer({image,title,description,githuburl,projectUrl}){
    return(
        <div className={styles.projectContainer}>
            <div className={styles.projectImage}>
                <img alt="project image" src={image} className={styles.projectImage} width={100} height={100}/>
            </div>
            <div className={styles.projectDescription}>
                <h4>{title}</h4>
                <p>{description}</p>
                <span className={styles.projectLinks}>
                    {githuburl ? 
                            <Link href={githuburl} target="/" className={styles.projectLinks}><GitHubIcon/></Link>
                        : <h4 className={styles.displayInlineBlock}>UX CASE STUDY</h4>
                    }
                    {projectUrl &&
                            <Link href={projectUrl} target="/" >visit website</Link>
                    }
                </span>
            </div>
        </div>
    )
}