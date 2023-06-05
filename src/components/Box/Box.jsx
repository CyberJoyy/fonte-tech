import styles from "./Box.module.scss";

const Box = () => {
  return (
    <section data-aos="fade-right" className={styles.box}>
     
      <section  className={styles.content}>
        <section className={styles.left}>
          <h1>Tem um projeto em mente?</h1>
          <p>
          Podemos auxiliar você na criação do seu projeto. Juntos falaremos sobre o que conseguimos construir e desenvolver durante todo o processo.
          </p>
          <button className="btn"> <a href=""> Fale conosco!  ➔ </a></button>
        </section>
        <section className={styles.right}></section>

      </section>
        <section className={styles.details}>
            <section className={styles.leftDetails}>
            <h1>Excelência em nossos serviços.</h1>
            </section>
            <section className={styles.rightDetails}>
             <p> Oferecemos serviços de manutenção e suporte contínuos para garantir que nossos clientes possam manter seus sites e sistemas atualizados e funcionando sem problemas. Se você está procurando uma empresa confiável e experiente, não hesite em entrar em contato conosco.</p>
            </section>
            
        </section>
        
    </section>
  );
};

export default Box;
