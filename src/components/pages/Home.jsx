import styles from "./Home.module.css";

import Hero from "../../assets/hero.svg";
import DrawLayout from "../Layout/DrawLayout";

export default function Home() {
    return (
        <main>
            <section className={styles.draws}>
                <DrawLayout
                    src={Hero}
                    title="Desenho"
                    description="desenho feito a partir de ..."
                />
            </section>
        </main>
    );
};