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
        <p>Tenemos una seleccion grande de decoraciones que se adapten a tu boda, aunque no haya un tema especifico que quieras seguir. Dudamos que encuentres opciones mas bonitas a este precio.</p>
        <GaleriaDeImagenes list={ImageSourceUtil.decoraciones} />
        <p>Es importante que cada detalle tenga buen gusto. Necesitamos centros de mesa que no ocupen mucho espacio y que tengan colores suaves.</p>
        <p>Tambien ofrecemos opciones que no sean excesivas. Es importante que todo combine bien y que cree una sensacion especial. Dudamos que otras empresas ofrezcan lo mismo.</p>
        <p>Nos alegra que nuestros clientes encuentren algo que les encante, y esperamos que tu tambien encuentres la decoracion perfecta. Buscamos que cada pareja tenga una experiencia que sea inolvidable.</p>
        <p>we recommend you to use the menu below</p>
        <Interaccion lockTab={"decoraciones"}/>
        <Cita name={"someone"}>Me alegro de que Vinculos haya llevado nuestra experienca de boda a otro nivel con decoraciones de ultimo calidad.</Cita>
    </article>);
}
