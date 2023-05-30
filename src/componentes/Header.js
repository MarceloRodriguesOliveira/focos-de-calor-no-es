import { Link } from 'react-router-dom'
import bandeira from '../imgs/bandeira-espirito-santo.png'
import styles from "./Header.module.css"

function Header(){

    return(
        <header className={styles.header}>
            <nav className={styles.nav_container}>
                <Link to="/">
                    <img src={bandeira} alt="bandeira-es" />
                </Link>
                <Link to="/info">
                    <h4>Informações</h4>
                </Link>
            </nav>

        </header>
    )
}

export default Header