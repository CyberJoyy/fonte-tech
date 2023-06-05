import Logo from "@/UI/Logo";
import styles from "./Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleIsMobile = () => setIsMobile(prevState => !prevState)
  return (
    <section className={styles.navbar}>
      <div className={styles.desktop}>
        <section className={styles.logo}>
          <Logo />
        </section>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Serviços</a>
            </li>
            <li>
              <a href="#about">Sobre nós</a>
            </li>
            <li>
              <a href="#clients">Clientes</a>
            </li>
            <li>
              <a href="#subscribe">Contato</a>
            </li>
            <li>
              <a href="#">
                {" "}
                <button className="nav-btn">Fale conosco!</button>
              </a>
            </li>
          </ul>
        </nav>

      </div>

      <div className={`${styles.mobile} ${isMobile ? styles.active : ''}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <GiHamburgerMenu onClick={toggleIsMobile} className={styles.burguer} />
        <nav className={styles['mobile-navigation']}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Serviços</a>
            </li>
            <li>
              <a href="#about">Sobre nós</a>
            </li>
            <li>
              <a href="#clients">Clientes</a>
            </li>
            <li>
              <a href="#subscribe">Contato</a>
            </li>
         
          </ul>
          <AiOutlineClose onClick={toggleIsMobile} className={styles.close} />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
