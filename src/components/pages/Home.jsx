import styles from "./Home.module.css";

import Hero from "../../assets/hero.svg";
import DrawLayout from "../Layout/DrawLayout";
import DrawCard from "../Layout/DrawCard";

export default function Home() {
    return (
        <main>
            <section className={styles.draws}>
                <DrawLayout />
            </section>
        </main>
    );
};