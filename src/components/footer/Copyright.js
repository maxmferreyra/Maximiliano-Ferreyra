import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCopyright
} from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {
    return(
        <div class="copyright">
            <span>Todos los derechos reservados</span>
            <span><FontAwesomeIcon icon={faCopyright}/></span>
        </div>
    )
}

export default Copyright