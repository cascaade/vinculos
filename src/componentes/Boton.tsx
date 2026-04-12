import type {ReactNode} from "react";
import styles from './Boton.module.scss';

export type BotonProps = {
    children: ReactNode,
    fill: "main" | "ghost",
    href?: string,
    onclick?: () => void,
};

export default function Boton({ children, fill, href, onclick }: BotonProps) {
    return (
        <a className={`${styles.boton} ${fill === "main" ? styles.main : styles.ghost}`} href={href} onClick={onclick}>{children}</a>
    );
}