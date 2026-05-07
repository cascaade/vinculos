import styles from './Decoraciones.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";
import Cita from "../plano/Cita.tsx";

export default function Decoraciones() {
    return (<article className={styles.decoraciones} id="_decoraciones">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Decoraciones</h3>
            <h4 className="header-body">Muchos tipos de flores y colores</h4>
        </header>
        <p>Tenemos una selección grande de decoraciones que expresan tu boda, aunque no haya un tema específico que quieras seguir. Dudamos que encuentres opciones más bonitas a este precio.</p>
        <GaleriaDeImagenes list={ImageSourceUtil.decoraciones} />
        <p>Es importante que cada detalle tenga buen gusto. Necesitamos centros de mesa que no ocupen mucho espacio y que tengan colores suaves.</p>
        <p>También ofrecemos opciones que no son excesivas. Es importante que todo combine bien y que cree una sensación especial. Dudamos que otras empresas ofrezcan lo mismo.</p>
        <p>Nos alegra que nuestros clientes encuentren algo que les encante, y esperamos que tú también encuentres la decoración perfecta. Buscamos que cada pareja tenga una experiencia inolvidable.</p>
        <p>Recomendamos que uses el menú de abajo para explorar estilos, colores y detalles antes de reservar.</p>
        <Interaccion lockTab={"decoraciones"}/>
        <Cita name={"Cliente de Vínculos"}>Me alegro de que Vínculos haya llevado nuestra experiencia de boda a otro nivel con decoraciones de la más alta calidad.</Cita>
    </article>);
}
