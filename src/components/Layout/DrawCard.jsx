import styles from "../pages/Home.module.css";

export default function DrawCard({ src, title, description, active }) {
    return (
        <div className={`${styles.draw} ${active ? styles.active : ""} ${styles.fade}`}>
            <img src={src} alt="" />
            <div className={styles.content}>
                <h2 className={styles.draw_name}>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}