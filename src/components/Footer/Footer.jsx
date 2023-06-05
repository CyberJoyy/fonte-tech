
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <section className={styles.left}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <section className={styles.right}>
        <a href="#"><img src="/insta.png" alt=""  width={25}/></a>
        <a href="#"><img src="/whatsapp.png" alt="" width={25} /></a>
        <a href="#"><img src="/email.png" alt="" width={25} /></a>
        </section>
      </section>

      <section className={styles.copyright}>
      <h4>Copyright © 2023 Fonte Tech ┃ Powered by Fonte Tech</h4>
      </section>

    </footer>
  );
};

export default Footer;
