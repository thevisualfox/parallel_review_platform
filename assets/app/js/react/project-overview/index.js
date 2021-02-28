/* Packages */
import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";

/* Components */
import ProjectOverview from "./components/ProjectOverview";

/* Render */
const projectOverviewNode = document.getElementById("projectOverview");
if (projectOverviewNode !== null) {
    render(
        <RecoilRoot>
            <ProjectOverview {...projectOverviewNode.dataset} />
        </RecoilRoot>,
        projectOverviewNode
    );
}
