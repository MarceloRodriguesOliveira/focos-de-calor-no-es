import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

export default function Footer(){
    

    return(
        <footer className={styles.footer_container}>
            <ul>
                <li>
                    <a href="https://github.com/MarceloRodriguesOliveira" target="_blank" rel="noreferrer"><FaGithub/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/marcelo-rodrigues-eng/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                </li>
            </ul>
            <p>Queimadas ES © Todos os direitos reservados.</p>

        </footer>
    )
}
