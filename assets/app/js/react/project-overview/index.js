/* Packages */
import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

/* Components */
import ProjectOverview from "./components/ProjectOverview";

/* Client */
const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

/* Render */
const projectOverviewNode = document.getElementById("projectOverview");
if (projectOverviewNode !== null) {
    render(
        <QueryClientProvider {...{ client }}>
            <ProjectOverview {...projectOverviewNode.dataset} />
        </QueryClientProvider>,
        projectOverviewNode
    );
}
