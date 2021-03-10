/* Packages */
import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

/* Components */
import ProjectOverview from "./components/ProjectOverview";

/* Client */
const client = new QueryClient();

/* Render */
const projectOverviewNode = document.getElementById("projectOverview");
if (projectOverviewNode !== null) {
    render(
        <RecoilRoot>
            <QueryClientProvider {...{ client }}>
                <ProjectOverview {...projectOverviewNode.dataset} />
            </QueryClientProvider>
        </RecoilRoot>,
        projectOverviewNode
    );
}
