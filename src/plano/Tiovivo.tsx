import styles from './Tiovivo.module.scss';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCALE_MAX = 1;
const SCALE_MIN = 0.5;
const ROTATE_MAX = 6;

const A_START = Math.PI / 2;
const A_END = A_START + 3 * (Math.PI / 2);

function remap(x: number): number {
    return x - (1.45 * Math.PI / 8) * Math.sin(x + Math.PI / 2);
}

function propsFromAngle(a: number, cardIndex: number, radiusX: number) {
    const base = a - cardIndex * (Math.PI / 2);
    const mapped = remap(base);
    const sinVal = Math.sin(mapped);
    const cosVal = Math.cos(mapped);
    const x = cosVal * radiusX;
    const scale = SCALE_MIN + Math.pow(((sinVal + 1) / 2), 0.75) * (SCALE_MAX - SCALE_MIN);
    const rotateY = cosVal * ROTATE_MAX;
    const zIndex = Math.round((sinVal + 1) * 500);
    return {x, scale, rotateY, zIndex};
}

export default function Tiovivo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const staleCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = cardsRef.current;

        const applyA = (a: number) => {
            const radiusX = (staleCardRef.current?.getBoundingClientRect().width ?? 260) * 0.85;
            cards.forEach((card, i) => {
                const {x, scale, rotateY, zIndex} = propsFromAngle(a, i, radiusX);
                gsap.set(card, {scale, rotate: `${rotateY}deg`, zIndex, x, xPercent: -50});
            });
        };

        applyA(A_START);

        const proxy = {a: A_START};

        const st = ScrollTrigger.create({
            trigger: sentinelRef.current,
            start: 'top 400rem',
            end: 'bottom bottom',
            pin: sectionRef.current,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
                const targetA = A_START + self.progress * (A_END - A_START);
                gsap.to(proxy, {
                    a: targetA,
                    duration: 0.15,
                    overwrite: true,
                    onUpdate: () => applyA(proxy.a),
                });
            },
        });

        const onResize = () => {
            ScrollTrigger.refresh();
            applyA(proxy.a);
        };

        window.addEventListener('resize', onResize);

        return () => {
            st.kill();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className={styles.sentinel} ref={sentinelRef}>
            <div className={styles.tiovivo} ref={sectionRef}>
                <div className={styles.stage}>
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={styles.card}
                            ref={(el) => {
                                cardsRef.current[i] = el;
                            }}
                        >
                            <img src={`/invitation-${i}.png`} alt={`Invitation ${i + 1}`}/>
                        </div>
                    ))}
                    <div
                        className={`${styles.card} ${styles.stale}`}
                        ref={staleCardRef}
                    >
                        <img src={`/invitation-0.png`} alt={`Invitation 1`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
