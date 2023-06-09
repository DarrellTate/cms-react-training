import React, { useState, useEffect } from "react";
import md5 from "md5";
import "./styles.css";

export default function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const now = Date.now();
            const publicKey = "f915dc7e8513c000621fb8a9e7fceb2c";
            const privateKey = "2101628d3eafe941f779d406b851f0beeb653d89";
            let params = {
                apikey: publicKey,
                ts: now
            };
            params.hash = md5(params.ts + privateKey + publicKey);

            const apiUrl = "https://gateway.marvel.com/v1/public/characters";

            const results = await fetch(
                `${apiUrl}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`
            )
                .then(res => res.json())
                .then(res => res.data)
                .then(res => res.results);

            setData(results);
        };

        fetchData();
    }, []);
    return (
        <div className="App">
            <h1>Marvel API</h1>

            {data.map((char, index) => (
                <div key={char.id.toString()}>
                    <p>
                        {index} - {char.name}
                    </p>
                    {index < data.length - 1 ? <hr /> : ""}
                </div>
            ))}
        </div>
    );
}
