import styles from "./components.module.css"

export default function ContentContainer({className, content}){
    return(
            <div className={styles.contentContainer}>
                <p>
                    {content}
                </p>
            </div>
    )
}