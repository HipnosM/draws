import styles from "../pages/Home.module.css";

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DrawCard from "./DrawCard";

export default function DrawLayout() {

    const [draws, setDraws] = useState([]);
    const [drawIndex, setDrawIndex] = useState(0);

    const campos = "id,media_type,media_url,caption";
    const limit = 20;
    const token = import.meta.env.VITE_INSTAGRAM_TOKEN
    const appUrl = `https://graph.instagram.com/me/media?fields=${campos}&access_token=${token}&limit=${limit}`;

    useEffect(() => {
        fetch(appUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setDraws(data.data);
            })
    }, []);

    const handlePrev = () => {
        setDrawIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    };

    const handleNext = () => {
        setDrawIndex((prevIndex) => (prevIndex === draws.length -2 ? prevIndex : prevIndex + 1));
    };

    return (
        <div className={styles.draw}>
            <div className={styles.carousel} style={{ '--translate-x': `-${drawIndex * 100}%` }}>
                {draws
                    .filter((item) => item.media_type === "IMAGE")
                    .map((item, index) => (
                        <DrawCard
                            key={item.id}
                            title={item.caption ? item.caption.replace(/#[^\s-]+/g, '').replace(/\s*-\s*-*/g, '') : ''}
                            src={item.media_url}
                            description={item.caption}
                            active={index === drawIndex}
                        />
                    ))}
            </div>
            <div className={styles.buttons}>
                <IoIosArrowBack className={styles.prevButton} onClick={handlePrev} />
                <IoIosArrowForward className={styles.nextButton} onClick={handleNext} />
            </div>
        </div>
    );
};