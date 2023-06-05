import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <section data-aos="fade-left" className={styles.content}>
        <section className={styles.left}>
          <h1 className="hdark">Sobre nós</h1>
          <p className="less">
            Somos uma empresa especializada em desenvolvimento e gestão de
            sistemas que oferece soluções personalizadas para nossos clientes.
            Utilizamos as mais recentes tecnologias e melhores práticas para
            criar sites e sistemas que atendam às necessidades de negócios
            exclusivas de nossos clientes.
          </p>
          <section>
            <h3 className="hdark">Missão.</h3>
            <p>
              Queremos ter compromisso em manter a excelência em nossos serviços
              e em investir continuamente em nossa equipe de desenvolvedores,
              garantindo que eles estejam sempre atualizados com as mais
              recentes tecnologias e tendências do setor.
            </p>
          </section>
          <section>
            <h3 className="hdark">Visão.</h3>
            <p>
              Nossa visão é ser uma empresa líder em soluções de desenvolvimento
              web personalizadas, oferecendo tecnologia de ponta e experiência
              excepcional ao cliente. Nosso objetivo é fornecer soluções
              inovadoras e eficazes que ajudem nossos clientes a atingir seus
              objetivos de negócios, aumentar sua presença online e impulsionar
              seu sucesso.
            </p>
          </section>
        </section>
        <section className={styles.right}>
          <Image src={"/laptop.png"} width={350} height={550} />
        </section>
      </section>
    </section>
  );
};

export default About;
