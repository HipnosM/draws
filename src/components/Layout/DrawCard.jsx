import styles from "../pages/Home.module.css";

export default function DrawCard({ src, title, description }) {
    return (
        <div className={styles.draw}>
            <img key={key} src={src} alt="" />
            {/* <div className={styles.content}>
                <h2 className={styles.draw_name}>{title}</h2>
                <p>{description}</p>
            </div> */}
        </div>
    );
};