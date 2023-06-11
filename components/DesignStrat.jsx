import Image from 'next/image'
import styles from './components.module.css'
export default function DesignStrat({content, title, imageSrc}){
    return(
    <div className={styles.designContainer}>
        <div className={styles.designContainerMessage}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
        <Image src={imageSrc} width={250} height={250} alt={title}/>
    </div>
    )

}