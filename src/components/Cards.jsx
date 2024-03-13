import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'; // ES6
import '../styles/Cards.css'

function Card(props) {
    function onClick(e) {
        if(!props.currentList.includes(e.target.src)) {
            props.setCurrentList(oldArray => [...oldArray, e.target.src]);
            props.setScore(props.score + 1);
        } else {
            if(props.score > props.highscore) {
                props.setHighscore(props.score);
            }
            props.setScore(0);
            props.setGameover(true);
            props.setCurrentList([]);
        }
    }

    return (
        <div className="card" onClick={onClick}>
            <img src={props.src} alt="" />
        </div>
    )
}

export function Cards(props) {
    const [list, setList] = useState([]);
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        const url = 'https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter';
        const shuffle = (array) => {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        };

        async function fetchDBZ(url) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = shuffle(json)
                // const dataSliced = data.slice(0,4);
                setList(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDBZ(url);
    }, [currentList]);

    const cards = list.map(card =>
        <Card {...props} key={card.id} src={card.image} currentList={currentList} setCurrentList={setCurrentList} />
    );

    return (
        <>
            <div className='cards'>
                {cards}
            </div>
        </>
    );
}

Card.propTypes = {
    src: PropTypes.string,
}
