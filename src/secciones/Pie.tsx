import styles from './Pie.module.scss';

export default function Pie() {
    return (<footer className={styles.footer}>
        <section className={styles.main}>
            <span className={`logo ${styles.logo}`}>Vínculos</span>
            <div className={styles.links}>
                <div>
                    <a href="#invitaciones">invitaciones</a>
                    <a href="#ropa">ropa</a>
                    <a href="#comida">comida</a>
                </div>
                <div>
                    <a href="#entretenimiento">entretenimiento</a>
                    <a href="#decoraciones">decoraciones</a>
                </div>
                <div>
                    <a href="#negocio">negocio</a>
                    <a href="#contacto">contacto</a>
                </div>
            </div>
        </section>
        <section className={styles.copyright}>
            &copy; 2026 Owen. All Rights Reserved
        </section>
    </footer>);
}