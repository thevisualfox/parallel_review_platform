/* Packages */
import React from "react";
import { render } from "react-dom";

/* Components */
import ProjectOverview from "./components/ProjectOverview";

/* Render */
const projectOverviewNode = document.getElementById("projectOverview");
if (projectOverviewNode !== null) {
    render(<ProjectOverview {...projectOverviewNode.dataset} />, projectOverviewNode);
}
