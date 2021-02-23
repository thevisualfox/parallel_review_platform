/* Packages */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

/* Components */
import Project from "./Project";
import ProjectAdd from "./ProjectAdd";
import { Popover } from "../../common";
import { AnimatePresence, motion } from "framer-motion";

/* Animations */
import { STAGGER_UP } from "../../common/animations";

export default function ProjectOverview({ isAdmin }) {
    /* State */
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState("get_initial_projects");
    const [modalOpen, setModalOpen] = useState(false);

    /* Refs */
    const formRef = useRef();

    /* Constants */
    const { projects = [], projectsSlug = "" } = projectData;

    /* Effects */
    useEffect(() => {
        getProjects();
    }, []);

    /* Callbacks */
    const toggleModal = () => setModalOpen(!modalOpen);

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

            if (result.data.success) getProjects();
        } catch (error) {
            /* TODO: add error management */
            throw new Error(error);
        } finally {
            setLoading(null);
            setModalOpen(false);
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

    /* Render */
    return (
        <>
            <div className="row row--equalized gutters-5">
                <AnimatePresence initial={false}>
                    {projects.map((project, projectIndex) => (
                        <motion.div
                            {...STAGGER_UP(projectIndex)}
                            key={project.id}
                            className="col-12 col-md-6 col-lg-4 col-xl-3"
                            layout>
                            <Project {...{ ...project, deleteProject, editProject, projectsSlug }} />
                        </motion.div>
                    ))}
                    {isAdmin && loading !== "get_initial_projects" && (
                        <motion.div
                            {...STAGGER_UP(projects.length)}
                            key="add-project"
                            className="col-12 col-md-6 col-lg-4 col-xl-3"
                            layout>
                            <ProjectAdd {...{ toggleModal }} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {!isAdmin && projects.length === 0 && (
                        <motion.p
                            {...STAGGER_UP()}
                            className="col-12 text-white"
                            layout>{`You don't have any projects yet`}</motion.p>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {modalOpen && <Popover {...{ addProject, formRef, toggleModal, loading }} />}
            </AnimatePresence>
        </>
    );
}
