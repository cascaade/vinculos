import styles from './Invitaciones.module.scss';
import Cita from "../plano/Cita.tsx";
import Tiovivo from "../plano/Tiovivo.tsx";
import Interaccion from "../componentes/Interaccion.tsx";

export default function Invitaciones() {
    return (<article className={styles.invitaciones} id="_invitaciones">
        <div>
            <header className={`${styles.header} standard-header`}>
                <h3 className="header-title">Invitaciones</h3>
                <h4 className="header-body">invitaciones perfectas para cada boda</h4>
            </header>
            <Tiovivo></Tiovivo>
            <div style={{height: "8rem"}}></div>
        </div>
        <p>Tenemos las mejores invitaciones, y no hay nadie que ofrezca invitaciones mejores a este precio que las nuestras. Dudamos que otra empresa ofrezca la misma calidad y personalización.</p>
        <p>Es importante que las invitaciones sean fáciles de entender y que reflejen el estilo de cada pareja. También es necesario que cada detalle sea claro. Es mejor que las invitaciones sean únicas, para que no se olviden fácilmente.</p>
        <p>Nos alegra que los clientes puedan crear invitaciones imposibles de olvidar para sus invitados. No hay otra empresa que haga este proceso tan fácil y flexible como nosotros.</p>
        <Interaccion lockTab={"invitaciones"}/>
        <Cita name={"Cliente de Vínculos"}>Es increíble que Vínculos cree invitaciones que los invitados no puedan olvidar. Me gusta mucho que la empresa sea tan confiable y que permita tanta personalización durante la planificación de nuestra boda. Recomiendo que todos los que busquen un organizador de bodas los elijan.</Cita>
    </article>);
}
