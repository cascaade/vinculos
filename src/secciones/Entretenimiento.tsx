import styles from './Entretenimiento.module.scss';
import GaleriaDeImagenes from "../plano/GaleriaDeImagenes.tsx";
import Interaccion from "../componentes/Interaccion.tsx";
import ImageSourceUtil from "../util/ImageSourceLookup.ts";

export default function Entretenimiento() {
    return (<article className={styles.entretenimiento} id="_entretenimiento">
        <header className={`${styles.header} standard-header`}>
            <h3 className="header-title">Entretenimiento</h3>
            <h4 className="header-body">Divertido para todos</h4>
        </header>
        <p>Vea a este video!</p>
        <div className={`${styles.videoContainer} standard-content`}>
            <iframe className={styles.video} src={ImageSourceUtil.video} lang={"es"}></iframe>
        </div>
        <p>Ofrecemos un gran variedad de activiades para que tu boda sea divertida y especial. Es probable que todos los invitados encuentren algo que les guste.</p>
        <p>No pensamos que alguien se aburra en tu boda con nuestras actividades. Es dudoso que nuestras bodas sean aburridas. Dudamos que otra empresa ofrezca tantas actividades para entretener a los invitados.</p>
        <GaleriaDeImagenes list={ImageSourceUtil.entretenimiento} />
        <p>Nos alegra que los invitados disfruten de cada momento y recuerden tu boda como una experiencia unica.</p>
        <p>Ojala que tu boda tenga actividades que hagan felices a todos los invitados.</p>
        <p>Recomendamos que elijas actividades que mantengan a todos entretenidos durante toda la celebracion. Aconsejamos que consideres opciones interactivas para mejorar la experiencia.</p>
        <Interaccion lockTab={"entretenimiento"}/>
    </article>);
}
