import {useEffect, useRef} from 'react';
import styles from './GaleriaDeImagenes.module.scss';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GaleriaDeImagenesProps {
    list: string[]
}

export default function GaleriaDeImagenes({list}: GaleriaDeImagenesProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rows = containerRef.current?.querySelectorAll(`.${styles.row}`);

        rows?.forEach((row, i) => {
            const speed = i === 1 ? 1.5 : 1;
            const direction = i === 1 ? -1 : 1;

            let x = 0;
            let velocity = 0;

            const width = row.scrollWidth / 2;

            const trigger = ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                onUpdate: (self) => {
                    const v = self.getVelocity();
                    velocity += v * 0.002 * speed;
                },
            });

            const ticker = gsap.ticker.add((_, deltaTime) => {
                const dt = deltaTime / 60;

                x += velocity * dt * direction;

                if (x <= -width) x += width;
                if (x >= 0) x -= width;

                gsap.set(row, {x});

                velocity *= 0.9;
            });

            return () => {
                trigger.kill();
                gsap.ticker.remove(ticker);
            };
        });
    }, []);

    const set1 = list.slice(0, 4);
    const set2 = list.slice(4, 8);

    return (
        <div ref={containerRef} className={styles.galeria}>
            <div className={styles.track}>
                <div className={styles.row}>
                    {
                        [...set1, ...set1].map((src, i) =>
                            <img src={src} alt="" key={i}/>
                        )
                    }
                </div>
            </div>

            <div className={styles.track}>
                <div className={styles.row}>
                    {
                        [...set2, ...set2].map((src, i) =>
                            <img src={src} alt="" key={i}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
