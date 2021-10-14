import React from "react";
import Proyects from "./proyects/index.js";
import Tools from "./tools/index.js";
import AboutMe from "./AboutMe"
import TitleContainer from "./TitleContainer";


const Main = () => {
return(
    <div>
        <main>
            <TitleContainer />
            <AboutMe />
            <Tools />
            <Proyects />
        </main>
    </div>
)
}

export default Main