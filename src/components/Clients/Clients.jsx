import styles from './Clients.module.scss';

const Clients = () => {
    return <section data-aos="fade-right" id='clients' className={styles.clients}>
        <h1>Clientes</h1>
        <section data-aos="fade-left" className={styles.content}>
          <section><a href="https://www.conexsus.org"><img src="/cliente1.svg" alt="conexus" width={200}/></a></section>
          <section><a href="https://prix.org.br"><img  src="/cliente2.svg" alt="conexus" width={200}/></a></section>
          <section><a href="https://marketingmarcante.com.br"><img  src="/cliente3.svg" alt="conexus" width={200}/></a></section>
        </section>
        <h2>Por que nos escolher?</h2>
        <p>Somos a equipe perfeita para o seu negócio. Temos experiência e conhecimento, além de oferecermos serviços excelentes em uma faixa de preço justa.

Conosco, você será compreendido. Prestamos atenção a todos os requisitos do cliente para assim selecionar uma solução apropriada. Temos interesse genuíno em ajudar sua empresa a crescer e atingir seu potencial máximo. </p>
    </section>
};

export default Clients;