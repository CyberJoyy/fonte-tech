import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <section id="subscribe" className={styles.subscribe}>
      <section className={styles.content}>
        <section className={styles.left}>
          <h1>Contato</h1>
        </section>
        <section data-aos="fade-up" className={styles.form}>
          <form className={styles.forminside} action="/send-data-here" method="post">
            <label for="first">Primeiro nome:</label>
            <input type="text" id="first" name="first" />
            <label for="last">Último nome:</label>
            <input type="text" id="last" name="last" />
            <label for="number">Telefone:</label>
            <input type="number" id="number" name="number" />
            <button className={styles.submit} type="submit">Enviar</button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Subscribe;
