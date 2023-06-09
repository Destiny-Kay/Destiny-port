'use client'
import {projectInfo} from '../../../data/ProjectInfo'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import styles from './project.module.css'
import Link from 'next/link'

export default function Page({params}){
    const {title} = params

    const searchParams = useSearchParams()
    const projectName = searchParams.get('name')

    return(
        <>
            <div className={styles.container}>
               <Image src={projectInfo[projectName].heroImage} alt='heroImage' width={800} height={500} className={styles.imageStyling}/>
                <h1 className={styles.projectTitle}>{title}</h1>
                <p>{projectInfo[projectName].summary}</p>
                <p>Project duration: {projectInfo[projectName].duration}</p>

               
                <h1 className={styles.projectTitle}>INTRODUCTION</h1>
                <p>{projectInfo[projectName].introduction}</p>
                <Image src={projectInfo[projectName].introImage} alt='intro Image' width={800} height={500} className={styles.imageStyling}/>

                <h1 className={styles.projectTitle}>THE PROBLEM</h1>
                <div>
                    <p>{projectInfo[projectName].problem}</p>
                </div>
                
                <h1 className={styles.projectTitle}>UNDERSTANDING THE USER</h1>
                <p>{projectInfo[projectName].userEmpathy}</p>
                <Image src={projectInfo[projectName].problemImage} alt='problem Image' width={800} height={500} className={styles.imageStyling}/>
                
                <h1 className={styles.projectTitle}>DESIGN IDEAS</h1>
                <Image src={projectInfo[projectName].DesignIdeas} alt='design ideas' width={800} height={500} className={styles.imageStyling}/>
                
                <h1 className={styles.projectTitle}>FINAL DESIGNS</h1>
                <Image src={projectInfo[projectName].finalDesigns} alt='final designs' width={800} height={500} className={styles.imageStyling}/>
                
                <h3 className={styles.projectTitle}>A few changes made to fine tune the design</h3>
                <Image src={projectInfo[projectName].designIterations} alt='possible solutions Image' width={800} height={500} className={styles.imageStyling}/>
                {/* <h1 className={styles.projectTitle}>WHAT CHANGED?</h1> */}
                <p>That&apos;s all for now</p>
                <Link href="/work" className={styles.link}>View other projects</Link> 
            </div>
        </>
    )
}