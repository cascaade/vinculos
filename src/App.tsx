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

function App() {
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
