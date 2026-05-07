import Hero from './secciones/Hero';
import Numeros from "./secciones/Numeros.tsx";
import NavegacionDeServicios from "./plano/NavegacionDeServicios.tsx";
import Invitaciones from "./secciones/Invitaciones.tsx";
import Ropa from "./secciones/Ropa.tsx";
import Empresa from "./secciones/Empresa.tsx";
import Comida from "./secciones/Comida.tsx";
import Decoraciones from "./secciones/Decoraciones.tsx";
import Entretenimiento from "./secciones/Entretenimiento.tsx";
import NavegacionDeContacto from "./plano/NavegacionDeContacto.tsx";
import Contacto from "./secciones/Contacto.tsx";
import Pie from "./secciones/Pie.tsx";
import Sonar from "./secciones/Sonar.tsx";
import {useEffect, useRef} from "react";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useScrollTextReveal from "./util/useScrollTextReveal.ts";

gsap.registerPlugin(ScrollToPlugin);

function App() {
    const serviciosContainerRef = useRef<HTMLElement>(null);
    const contactoContainerRef = useRef<HTMLElement>(null);
    const serviciosNavRef = useRef<HTMLElement>(null);
    const contactoNavRef = useRef<HTMLElement>(null);

    useScrollTextReveal();

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (!hash) return;

            const el = document.getElementById("_" + hash);
            if (el) {
                const navbar = contactoContainerRef.current!.contains(el) ? contactoNavRef.current : serviciosNavRef.current;
                const offset = navbar ? navbar.offsetHeight : 0;

                gsap.to(window, {
                    duration: 1.3,
                    scrollTo: { y: el, offsetY: offset },
                    ease: (x: number) => {
                        return 1 - Math.pow(1 - x, 4);
                    }
                });
            }
        };

        scrollToHash();

        window.addEventListener("hashchange", scrollToHash);

        return () => {
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, []);

    return (
        <>
            <Hero/>
            <Numeros/>
            <main>
                <section ref={serviciosContainerRef}>
                    <NavegacionDeServicios ref={serviciosNavRef}/>
                    <Invitaciones/>
                    <Ropa/>
                    <Empresa/>
                    <Comida/>
                    <Decoraciones/>
                    <Entretenimiento/>
                </section>
                <section ref={contactoContainerRef}>
                    <NavegacionDeContacto ref={contactoNavRef}/>
                    <Contacto/>
                    <Sonar/>
                </section>
            </main>
            <Pie/>
        </>
    )
}

export default App
