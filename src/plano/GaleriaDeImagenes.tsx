import { useEffect, useRef } from 'react';
import styles from './GaleriaDeImagenes.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GaleriaDeImagenes() {
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

                gsap.set(row, { x });

                velocity *= 0.9;
            });

            return () => {
                trigger.kill();
                gsap.ticker.remove(ticker);
            };
        });
    }, []);

    return (
        <div ref={containerRef} className={styles.galeria}>
            <div className={styles.track}>
                <div className={styles.row}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>

            <div className={styles.track}>
                <div className={styles.row}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}