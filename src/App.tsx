import Hero from './secciones/Hero';
import Numeros from "./secciones/Numeros.tsx";
import NavegacionDeServicios from "./plano/NavegacionDeServicios.tsx";
import Invitaciones from "./secciones/Invitaciones.tsx";
import Ropa from "./secciones/Ropa.tsx";
import Negocio from "./secciones/Negocio.tsx";
import Comida from "./secciones/Comida.tsx";
import Decoraciones from "./secciones/Decoraciones.tsx";
import Entretenimiento from "./secciones/Entretenimiento.tsx";
import NavegacionDeContacto from "./plano/NavegacionDeContacto.tsx";
import Contacto from "./secciones/Contacto.tsx";
import Pie from "./secciones/Pie.tsx";
import Sonar from "./secciones/Sonar.tsx";
import {useEffect} from "react";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
    useEffect(() => {
        const navbar = document.querySelector("nav");
        const offset = navbar ? navbar.offsetHeight : 0;

        const scrollToHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (!hash) return;

            const el = document.getElementById("_" + hash);
            if (el) {
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
                <section>
                    <NavegacionDeServicios/>
                    <Invitaciones/>
                    <Ropa/>
                    <Negocio/>
                    <Comida/>
                    <Decoraciones/>
                    <Entretenimiento/>
                </section>
                <section>
                    <NavegacionDeContacto/>
                    <Contacto/>
                    <Sonar/>
                </section>
            </main>
            <Pie/>
        </>
    )
}

export default App
