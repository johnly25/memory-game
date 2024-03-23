import { useEffect, useState, useRef } from "react";
import '../styles/Cards.css'
import shuffle from "./helpers";
import { Card } from "./Card";

export function Cards(props) {
    const [list, setList] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);


    useEffect(() => {
        const url = 'https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter';
        async function fetchDBZ(url) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const jsonSliced = json.slice(0, 9);
                const data = shuffle(jsonSliced);
                setList(data);
                props.setGame({ ...props.game, totalCards: data.length });
            } catch (error) {
                console.log(error);
            }
        }
        fetchDBZ(url);
    }, [props.game.gameList]);



    

    const cards = list.map((card, i) =>
        <Card {...props} key={i} src={card.image} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
    );

    return (
        <>
            <div className='cards'>
                {cards}
            </div>
        </>
    );
}