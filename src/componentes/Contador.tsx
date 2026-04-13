import styles from './Contador.module.scss';
import {useCallback, useState} from "react";
import {useOnInView} from "react-intersection-observer";

export type ContadorProps = {
    num: number,
    ms?: number,
    pow?: number,
    className?: string,
}

export default function Contador({num, className = "", ms = 3000, pow = 5}: ContadorProps) {
    const [number, setNumber] = useState(0);

    const animate = useCallback(() => {
        const start = performance.now();
        const initial = 0;

        const step = (time: number) => {
            const progress = Math.min((time - start) / ms, 1);
            const eased = 1 - Math.pow(1 - progress, pow);
            setNumber(Math.round(initial + (num - initial) * eased));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setNumber(num);
            }
        };

        requestAnimationFrame(step);
    }, [num, ms, pow]);

    const trackingRef = useOnInView((inView) => {
            if (inView)
                animate();
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 1
        }
    );

    return (<span ref={trackingRef} className={`${styles.contador} ${className}`}>
        {number.toLocaleString()}
    </span>);
}
