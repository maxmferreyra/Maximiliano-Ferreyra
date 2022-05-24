import React from "react";
import ProyectGiphos from "./ProyectGiphos";
import ProyectHotel from "./ProyectHotel";
import ProyectPodcast from "./ProyectPodcast";

const Proyects = () => {
    return (
        <section className="proyects-container" id="proyects">  
            <ProyectPodcast />
            <ProyectHotel />
            <ProyectGiphos />
        </section>
    )
}

export default Proyects