/* Packages */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

/* Components */
import Project from "./Project";
import ProjectAdd from "./ProjectAdd";
import { Popover } from "../../common";

export default function ProjectOverview({ getProjectsUrl, addProjectUrl, isAdmin }) {
    /* State */
    const [projectData, setProjectData] = useState([]);
    const [popOverActive, setPopoverActive] = useState(false);

    /* Refs */
    const formRef = useRef();

    /* Constants */
    const { projects = [], projectsSlug = "" } = projectData;

    /* Effects */
    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        try {
            const result = await axios.get(getProjectsUrl);

            if (result.data) setProjectData(result.data);
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        }
    };

    const addProject = async (event) => {
        event.preventDefault();

        const params = new FormData(formRef.current);

        try {
            const result = await axios.post(addProjectUrl, params);

            if (result.data.success) {
                togglePopover();
                getProjects();
            }
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        }
    };

    const togglePopover = () => setPopoverActive(!popOverActive);

    /* Render */
    return (
        <div className="row row--equalized gutters-5">
            {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <Project {...{ ...project, projectsSlug }} />
                </div>
            ))}
            {isAdmin && (
                <>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <ProjectAdd {...{ togglePopover }} />
                    </div>
                    {popOverActive && <Popover {...{ popOverActive, togglePopover, formRef, addProject }} />}
                </>
            )}
            {!isAdmin && projects.length === 0 && <p className="text-white">{`You don't have any projects yet`}</p>}
        </div>
    );
}
