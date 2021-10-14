import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCodeBranch,
  faExternalLinkAlt

} from '@fortawesome/free-solid-svg-icons';

const ProyectPodcast = () => {
    return(
        <div className="proyect">
            <img src="./images/podcast.jpg" alt="imagen de proyecto"></img>
            <div className="proyect-info">
                <h3>CANAL DE PODCAST</h3>
                <p>Sitio web estático donde se incluyen animaciones y archivos multimedias. Proyecto realizado con tecnologias HTML, CSS.</p>
                <div className="div-icon-proyect">
                    <a href="https://github.com/maxmferreyra/maxiferreyra-podcastChannel"><FontAwesomeIcon icon={faCodeBranch}/></a>
                    <a href="https://podcast-channel-proyect.netlify.app/"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                </div>  
            </div> 
        </div>
    )
}

export default ProyectPodcast