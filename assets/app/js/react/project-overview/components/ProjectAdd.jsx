/* Packages */
import React from "react";

/* Assets */
import addProjectIcon from "../../../../symbols/add_project.svg";

export default function ProjectAdd({togglePopover}) {
    return (
        <article className="card card--link card--transparent">
            <div className="card-body d-flex align-items-center justify-content-center p-10">
                <button className="btn btn-link text-decoration-none stretched-link" onClick={togglePopover}>
                    <span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
                        <svg className="icon icon--48">
                            <use xlinkHref={addProjectIcon.url}></use>
                        </svg>
                        <span className="text--sm mt-1">Add more projects</span>
                    </span>
                </button>
            </div>
        </article>
    );
}
