import styles from "./Products.module.scss";

const Products = () => {
  return (
    <section data-aos="fade-right" id="products" className={styles.products}>
      <h1> Nossos serviços</h1>
      <section className={styles.content}>
        <section>
          <h3>Criação de Sites</h3>
          <p>
            Nós fornecemos serviços completos de criação de sites
            personalizados, desde a concepção até a implementação e manutenção.
          </p>
        </section>
        <section>
          <h3>Desenvolvimento</h3>
          <p>
            Nossa equipe de desenvolvedores experientes trabalha em conjunto com
            nossos clientes para entender suas necessidades e criar soluções
            personalizadas que atendam às suas especificações.
          </p>
        </section>
        <section>
          <h3>Gestão de Sistemas</h3>
          <p>
            Nós fornecemos serviços de gestão de sistemas abrangentes, ajudando
            nossos clientes a garantir que seus sistemas e aplicativos estejam
            sempre funcionando sem problemas.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Products;
