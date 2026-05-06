import styles from './Negocio.module.scss';
import Cita from "../plano/Cita.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Negocio() {
    return (<article className={styles.negocio} id="_negocio">
        <header className={styles.header}>
            <img src={ImageSourceUtil.negocio} alt=""/>
            <h3>Sobre Vínculos</h3>
        </header>
        <p>Cada boda debe sentirse fácil, elegante y muy personal.</p>
        <p>Con más de 8 años de experiencia, hemos diseñado y coordinado 164 bodas, con más de 43,173 invitados en celebraciones muy bonitas. Nuestro trabajo se basa en cuidar los detalles, tener buen diseño y hacer un proceso simple de principio a fin.</p>
        <p>Creemos que el verdadero lujo está en la personalización. Cada detalle se hace para reflejar tu visión, para que tu boda sea completamente tuya.</p>
        <p>Durante todo el proceso, damos prioridad a una comunicación clara y constante, para que te sientas apoyado, informado y seguro en cada paso.</p>
        <p>Nuestro trabajo es simple: hacer realidad tu visión con precisión, elegancia y facilidad.</p>
        <Cita name={"Owen - CEO"}>No hay dos parejas iguales, así que no debería haber dos bodas iguales. Hacemos cada detalle para ti, y no olvidamos nada. Dudo que otras empresas presten tanta atención a los detallles como nosotros.</Cita>
    </article>);
}
