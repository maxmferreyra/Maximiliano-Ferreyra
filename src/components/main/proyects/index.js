import React from "react";
import ProyectGiphos from "./ProyectGiphos";
import ProyectHotel from "./ProyectHotel";
import ProyectPodcast from "./ProyectPodcast";

const Proyects = () => {
    return (
        <section className="proyects-container" id="proyects">
                <h2>PROYECTOS</h2>
            <ProyectGiphos />
            <ProyectHotel />
            <ProyectPodcast />
        </section>
    )
}

export default Proyects