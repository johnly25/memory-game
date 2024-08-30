import { useEffect } from "react";
import { useState } from "react";
import '../styles/Cards.css'
import shuffle from "./helpers";
import { Card } from "./Card";

export function Cards(props) {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);
    useEffect(() => {
        console.log('fetch');
        const url = 'https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter';
        async function fetchDBZ(url) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const jsonSliced = json.slice(0, 9);
                setData(jsonSliced);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDBZ(url);
    }, []);

    useEffect(() => {
        setIsFlipped(true);
    }, [props.game.gameList]);

    useEffect(() => {
        let timer = setTimeout(() => {
            setList(shuffle(data))
            props.setGame({ ...props.game, totalCards: data.length })
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [props.game.gameList, data]);

    useEffect(() => {
        let timer = setTimeout(() => setIsFlipped(false), 800);
        return () => {
            clearTimeout(timer);
        };
    }, [isFlipped]);

    const cards = list.map(card =>
        <Card {...props} key={card.id} src={card.image} isFlipped={isFlipped} />
    );

    return (
        <>
            <div className='cards'>
                {cards}
            </div>
        </>
    );
}