import styles from './Contacto.module.scss';

export default function Contacto() {
    return (<article className={styles.contacto}>
        <header className={styles.header}>Contáctanos</header>
        <form action="" method="POST">
            <input type="text" name="" id="" placeholder="nombre"/>
            <input type="email" name="" id="" placeholder="correo electronico"/>
            <input type="tel" name="" id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="teléfono"/>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <input type="submit" value="Submit"/>
        </form>
    </article>);
}
