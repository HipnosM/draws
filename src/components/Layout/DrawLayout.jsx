import styles from "../pages/Home.module.css";

export default function DrawLayout({ src, title, description }) {
    return (
        <div className={styles.draw}>
            <img src={src} alt={`${src} ${title}`} />
            <div className={styles.content}>
                <h2 className={styles.draw_name}>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};