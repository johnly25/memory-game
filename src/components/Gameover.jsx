import { useState, useEffect, useRef } from "react";
import '../styles/Gameover.css'
import vegeta from '../assets/vegeta-rain.gif'
import goku from '../assets/goku-thumbs-up.gif'

function Screen(props) {
    let content;
    function handleClick() {
        props.setGame({...props.game, gameOver: false, score: 0, gameList: [], playerWin: false});
    }
    if (props.game.playerWin) {
        content = (
            <>
                <img src={goku}></img>
                You won!
            </>
        )
    } else {
        content = (
            <>
                <img src={vegeta}></img>
                <div>Game Over</div>
           </>
        )
    }
    return (
        <div>
            {content}
            <button onClick={handleClick}>Play again?</button>
        </div>
    )
}

export function Gameover(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        setModalOpen(props.game.gameOver);
    }, [props.game.gameOver]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        modalElement.addEventListener('cancel', (event) => {
            event.preventDefault();
        });
    })

    return (
        <dialog className='modal' ref={modalRef}>
            <Screen {...props} />
        </dialog>

    );
}