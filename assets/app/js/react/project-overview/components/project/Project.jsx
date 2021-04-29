/* Packages */
import React from "react";

/* Components */
import ProjectImage from "./ProjectImage";
import ProjectMenu from "./ProjectMenu";
import { Users } from "../../../components/users";

export default function Project({ project }) {
    /* Constants */
    const { slug, title, projectImages, users, author } = project;

    /* Render */
    return (
        <a href={`projects/${slug}`} title={title} className="card card--link card--product">
            <ProjectImage {...{ projectImages }} />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="mb-2">{title ? title : "Add a nice title"}</p>
                        <div className="d-flex align-items-center">
                            <Users {...{ users, project: { author }, layout: "minimal" }} />
                        </div>
                    </div>
                    <ProjectMenu {...{ projectId: project.id }} />
                </div>
            </div>
        </a>
    );
}
