import React from "react";
import ToolsDesign from "./ToolsDesign";
import ToolsDeveloper from "./ToolsDeveloper";

const Tools = () => {
    return(
        <section className="tools-container">
            <ToolsDeveloper />
            <ToolsDesign />
        </section>
    )
}

export default Tools;