import styles from './Pie.module.scss';

export default function Pie() {
    return (<>
        <section className={styles.main}>
            <span className={`logo ${styles.logo}`}>Vínculos</span>
            <div className={styles.links}>
                <a href="#invitaciones">invitaciones</a>
                <a href="#ropa">ropa</a>
                <a href="#comida">comida</a>
                <br/>
                <a href="#decoraciones">decoraciones</a>
                <a href="#entretenimiento">entretenimiento</a>
                <br/>
                <a href="#negocio">negocio</a>
                <a href="#contacto">contacto</a>
            </div>
        </section>
        <section className={styles.copyright}>
            &copy; 2026 Owen. All Rights Reserved
        </section>
    </>);
}