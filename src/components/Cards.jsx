import { useEffect } from "react";
import { useState } from "react";
import '../styles/Cards.css'
import shuffle from "./helpers";
import { Card } from "./Card";

export function Cards(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log('fetch');
        const url = 'https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter';

        async function fetchDBZ(url) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const jsonSliced = json.slice(0, 4);
                const data = shuffle(jsonSliced);
                setList(data);
                props.setGame({...props.game, totalCards: data.length});
            } catch (error) {
                console.log(error);
            }
        }
        fetchDBZ(url)
    }, [props.game.gameList]);

    const cards = list.map(card =>
        <Card {...props} key={card.id} src={card.image} />
    );

    return (
        <>
            <div className='cards'>
                {cards}
            </div>
        </>
    );
}