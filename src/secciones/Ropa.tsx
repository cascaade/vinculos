import styles from './Ropa.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Ropa() {
    return (<article className={styles.ropa}>
        <header className={`${styles.header} standard-header`} id="_ropa">
            <h3 className="header-title">Ropa</h3>
            <h4 className="header-body">encontre tu vestido ideal</h4>
        </header>
        <p>Tenemos un catalogo increible de estilos y looks. Contamos con una seleccion de mas de 50 vestidos, 20 trajes, y mas de 100 otras ropas.</p>
        <p>Nos alegra que encuentres una gran variedad de opciones para tu estilo. Es importante que cada persona encuentre un vestido o traje que encaje bien a su estilo. Es improbable que exista otra coleccion con tanta variedad en otros empresas.</p>
        <p>Esperamos que cada personal se sienta especial con su ropa, como toda novia deberia sentirse en su dia importante. Nos ecanta que cada cliente pueda expresar su personalidad.</p>
        <p>No hay nadie que pueda hacer mejores recomendaciones que nosotros.</p>
        <GaleriaDeImagenes list={ImageSourceUtil.ropa}/>
        <p>Tambien podemos crear vestidos personalizados si es necesario para encaje completamenta a lo que el cliente quiere.</p>
        <p>Recomendamos que pruebes diferentes opciones en el menu debao para encontrar ropa ideal para tu boda. Aconsejamos que explores todas las personalizaciones posibles para que el resultado sea perfecto.</p>
        <Interaccion lockTab={"ropa"}/>
    </article>);
}
