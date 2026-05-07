import styles from './Ropa.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Ropa() {
    return (<article className={styles.ropa}>
        <header className={`${styles.header} standard-header`} id="_ropa">
            <h3 className="header-title">Ropa</h3>
            <h4 className="header-body">encuentra tu vestido ideal</h4>
        </header>
        <p>Tenemos un catálogo increíble de estilos y conjuntos. Contamos con una selección de más de 50 vestidos, 20 trajes y más de 100 prendas para todas las celebraciones.</p>
        <p>Nos alegra que encuentres una gran variedad de opciones para tu estilo. Es importante que cada persona encuentre un vestido o traje que encaje bien con su personalidad. Es improbable que exista otra colección con tanta variedad en otras empresas.</p>
        <p>Esperamos que cada persona se sienta especial con su ropa, como toda novia debería sentirse en su día importante. Nos encanta que cada cliente pueda expresar su personalidad.</p>
        <p>No hay nadie que pueda hacer mejores recomendaciones que nosotros.</p>
        <GaleriaDeImagenes list={ImageSourceUtil.ropa}/>
        <p>También podemos crear vestidos personalizados si necesitas que encajen completamente con lo que quieres.</p>
        <p>Recomendamos que pruebes diferentes opciones en el menú de abajo para encontrar la ropa ideal para tu boda. Aconsejamos que explores todas las personalizaciones posibles para que el resultado sea perfecto.</p>
        <Interaccion lockTab={"ropa"}/>
    </article>);
}
