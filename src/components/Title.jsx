import logo from '../assets/dbz-logo.png'
import '../styles/Title.css'
export function Title(props) {
    return (
        <div className='title'>
            <img src={logo} />
            <h1>{props.title}</h1>
        </div>

    );
}

