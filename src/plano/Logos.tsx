import styles from './Logos.module.scss';
import ImageSourceUtil from "../util/ImageSourceUtil.ts";

interface LogosProps {
    header?: string
}

export default function Logos({header}: LogosProps) {
    const looped = [...ImageSourceUtil.logos, ...ImageSourceUtil.logos];

    return (
        <div className={styles.logos}>
            <span className={styles.header}>{header}</span>
            <div className={styles.track}>
                {looped.map((src, i) => (
                    <div className={styles.logo} key={i}>
                        <img src={src} alt={`logo-${i}`}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
