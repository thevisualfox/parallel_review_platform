/* Packages */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

/* Components */
import Project from "./Project";
import ProjectAdd from "./ProjectAdd";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectOverview({ isAdmin }) {
    /* State */
    const [projectData, setProjectData] = useState([]);
    const [popOverActive, setPopoverActive] = useState(false);
    const [loading, setLoading] = useState("get_initial_projects");

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
            const result = await axios.get("/projects/get");

            if (result.data) setProjectData(result.data);
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const addProject = async (event) => {
        event.preventDefault();

        const params = new FormData(formRef.current);

        try {
            setLoading("add_project");

            const result = await axios.post("/projects/add", params);

            if (result.data.success) {
                togglePopover();
                getProjects();
            }
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const deleteProject = async (event, id) => {
        event.preventDefault();

        try {
            setLoading("delete_project");

            const result = await axios.delete(`/projects/delete/${id}`);

            if (result.data.success) getProjects();
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const editProject = async (event, id, params) => {
        event.preventDefault();

        try {
            setLoading("edit_project");

            const result = await axios.post(`projects/edit/${id}`, params);

            if (result.data.success) getProjects();
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const togglePopover = () => setPopoverActive(!popOverActive);

    /* Render */
    return (
        <div className="row row--equalized gutters-5">
            <AnimatePresence initial={false}>
                {projects.map((project, projectIndex) => (
                    <motion.div
                        {...animation(projectIndex)}
                        key={project.id}
                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                        layout>
                        <Project {...{ ...project, deleteProject, editProject, projectsSlug }} />
                    </motion.div>
                ))}
                {isAdmin && loading !== "get_initial_projects" && (
                    <motion.div
                        {...animation(projects.length)}
                        key="add-project"
                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                        layout>
                        <ProjectAdd {...{ popOverActive, togglePopover, addProject, formRef }} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {!isAdmin && projects.length === 0 && (
                    <motion.p
                        {...animation()}
                        className="col-12 text-white"
                        layout>{`You don't have any projects yet`}</motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

const animation = (index) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { ease: [0.65, 0, 0.35, 1], delay: index ? index * 0.035 : 0 } },
    exit: { opacity: 0, y: -25, transition: { ease: [0.65, 0, 0.35, 1] } },
});
