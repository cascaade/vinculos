import styles from './Contacto.module.scss';
import Boton from "../componentes/Boton.tsx";
import {useRef} from "react";

export default function Contacto() {
    const formRef = useRef<HTMLFormElement | null>(null);

    return (<article className={styles.contacto}>
        <header className={styles.header}>Contáctanos</header>
        <form action="" method="POST" className={styles.form} ref={formRef} onSubmit={(e) => { e.preventDefault(); alert("guau!") }}>
            <input type="text" name="" id="" placeholder="nombre" />
            <input type="email" name="" id="" placeholder="correo electronico" required />
            <input type="tel" name="" id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="teléfono" onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Enter a phone number, e.g. 123-456-7890")}
                   onChange={(e) => (e.target as HTMLInputElement).setCustomValidity("")} required />
            <textarea name="" id="" maxLength={300} placeholder="notas"></textarea>
            <Boton fill="main" className={styles.button} onclick={() => formRef.current?.requestSubmit()}>Entregar</Boton>
        </form>
    </article>);
}
