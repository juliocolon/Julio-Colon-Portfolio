import styles from "./About.module.css"

export default function About() {

    return (
        <div className={styles.about}>
            <span className={styles.container}>
                <img className={styles.image} src="/Julio_Headshot.jpeg" alt="Julio-Headhsot" />
                <h1 className={styles.heading}>Hi, I'm Julio</h1>
            </span>
            <span className={styles.statement}>I'm a Marketing Professional & Software Engineer specializing in the MERN Stack.</span>
            <div className={styles.text}>
                <p>My goal is to build intuitive, user-first, digital experiences.</p>
                <p>To learn more about my professional background, click here to view my <a className={styles.anchor} href="https://pdfhost.io/v/gugwBMwm._Julio_Colon_Resume" target="_blank">resume</a>.</p>
            </div>

        </div>
    )
}