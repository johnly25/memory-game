import { useEffect } from "react";
import { useState } from "react";
import '../styles/Cards.css'
import shuffle from "./helpers";
import { Card } from "./Card";

export function Cards(props) {
    const [list, setList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(true);
    }, [currentList]);

    useEffect(() => {
        const url = 'https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter';
        async function fetchDBZ(url) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = shuffle(json)
                setList(data);
                props.setTotalCards(list.length);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDBZ(url)
    }, [currentList ]);

    useEffect(() => {
        if (!props.gameOver) {
            const timeoutId = setTimeout(() => {
                setIsFlipped(false);
            }, 850);
            return () => clearTimeout(timeoutId);
        }
    }, [isFlipped, props.gameOver]);

    useEffect(() => {
        if (props.score == props.totalCards && props.totalCards != 0) {
            props.setGameover(true);
            setCurrentList([]);
        }
    },[props.totalCards, props]);

    const cards = list.map(card =>
        <Card {...props} key={card.id} src={card.image} currentList={currentList} setCurrentList={setCurrentList} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
    );

    return (
        <>
            <div className='cards'>
                {cards}
            </div>
        </>
    );
}