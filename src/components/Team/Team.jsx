import styles from './Team.module.scss';

const Team = () => {
    return <section data-aos="fade-left" className={styles.team}>
        <section className={styles.content}>
            <section className={styles.left}>
                <p>Parceiros Confiáveis</p>
                <h1> Equipe motivada com ideias inovadoras.</h1>
            </section>
            <section className={styles.right}>
            <p>Nossa equipe de desenvolvedores experientes trabalha de perto com nossos clientes para entender suas metas e objetivos de negócios e, em seguida, cria soluções web personalizadas que os ajudam a alcançá-las. Desde a concepção e design até o desenvolvimento e implementação, garantimos que nossos clientes obtenham os resultados desejados.</p>
            </section>
        </section>
        
        <section className={styles.pictures}>
            <img src="/team1.jpg" alt="" width={400} height={400}/>
            <img src="/team2.jpg" alt="" width={400} height={400}/>
            <img src="/team3.jpg" alt="" width={400} height={400}/>
        </section>

    </section>
};

export default Team;