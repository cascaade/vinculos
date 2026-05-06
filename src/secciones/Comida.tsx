import styles from './Comida.module.scss';
import Logos from "../plano/Logos.tsx";
import Interaccion from "../componentes/Interaccion.tsx";

export default function Comida() {
    return (<article className={styles.comida} id="_comida">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Comida</h3>
            <h4 className="header-body">Tu comida favorita en tu boda</h4>
        </header>
        <p>Tenemos muchos socios que ayudan a que haya buena comida en las bodas de nuestros clientes. Que tipo de cocina prefieres? De comida rapida a comida elegante, tenemos de todo.</p>
        <Logos />
        <p>Nos alegra que los clientes y sus invitados coman hasta el ultimo bocado de la cena y los postres porque estan muy buenos.</p>
        <p>No creemos que haya otra empresa que ofrezca una seleccion de comida tan amplia.</p>
        <p>Recomendamos que elijas algunos de tus platos favoritos para que tu boda tenga un abiente especial.</p>
        <Interaccion lockTab={"comida"}/>
    </article>);
}
