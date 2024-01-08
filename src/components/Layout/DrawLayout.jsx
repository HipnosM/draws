import styles from "../pages/Home.module.css";

import { useState, useEffect } from "react";
import DrawCard from "./DrawCard";

export default function DrawLayout() {

    const [draws, setDraws] = useState([]);

    const campos = "id,media_url";
    const token = "IGQWRNVGNIU3lqSXlTemVjdFFXb3dNcENoNEZAEZAnp5QWlsdWxVSGJMTi11RF9wUjF0U2dneVdOWF9CTUNDWVFaY3JOeV8yX0oxQmZAtdHdfUl9NOGdtNlpJSGZAwS2pzRl9IMVdwX2hUZAWtOZA1BFM1JURHZAKQ1FQMmMZD";
    const limit = 20;
    const appUrl = `https://graph.instagram.com/me/media?fields=${campos}&access_token=${token}&limit=${limit}`;

    // async function fetchData() {
    //     const response = await fetch(appUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });
    //     const data = await response.json();
    //     setDraws(data.data);
    //     console.log(data.data);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
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
                console.log(data.data);
            })
    }, [])

    return (
        <div className={styles.draw}>
            {draws.map((item) => {
                <DrawCard
                    src={item.media_url}
                />
            })}
        </div>
    );
};