import styles from "./components.module.css"

export default function ContentContainer({ children, content}){
    return(
            <div className={styles.contentContainer}>
                <p>
                    {content}
                </p>
                {children}
            </div>
    )
}