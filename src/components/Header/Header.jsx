import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss';


const Header = () => {
    return <header className={styles.header}>
        <div id='home' className={styles.content}>
            <h1>A empresa digital que cresce com o seu sucesso.</h1>
            <p>Se você procura uma agência que eleve sua presença digital, está no lugar certo. Podemos elevar o nível do seu negócio.</p>
        </div>
       
        <button className='chevron'> <a href="#products"> <FontAwesomeIcon icon={faChevronDown}/> </a></button>       

    
    </header>
};

export default Header;