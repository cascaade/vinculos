import type {ReactNode} from "react";
import styles from './Boton.module.scss';

export type BotonProps = {
    children: ReactNode,
    fill: "main" | "ghost",
    className?: string,
    href?: string,
    onclick?: () => void,
};

export default function Boton({ children, fill, href, onclick, className = "" }: BotonProps) {
    return (
        <a className={`${className} ${styles.boton} ${fill === "main" ? styles.main : styles.ghost}`} href={href} onClick={onclick}>{children}</a>
    );
}
