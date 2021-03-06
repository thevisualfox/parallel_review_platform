/* Packages */
import React, { useEffect } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

/* Components */
import { Project } from "./project";
import { ProjectAdd } from "./project-add";

/* Animations */
import { STAGGER_UP } from "../../common/animations";

/* Global state */
import { adminState, loadingState, projectsState, userState } from "../state";

export default function ProjectOverview() {
    /* State */
    const [projects, setProjects] = useRecoilState(projectsState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const setUser = useSetRecoilState(userState);
    const isAdmin = useRecoilValue(adminState);

    /* Effects */
    useEffect(() => getProjects(), []);

    const getProjects = async () => {
        try {
            const result = await axios.get("/api/projects/get");

            if (result.data) {
                setProjects(result.data.projects);
                setUser(result.data.user);
            }
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const editProject = async (formRef, id, callback) => {
        const params = new FormData(formRef.current);

        try {
            setLoading("edit_project");

            const result = await axios.post(`/api/projects/edit/${id}`, params);

            if (result.data.success) {
                getProjects();
                callback();
            }
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(null);
        }
    };

    const deleteProject = async (id) => {
        try {
            setLoading("delete_project");

            const result = await axios.post(`/api/projects/delete/${id}`);

            if (result.data.success) getProjects();
        } catch (error) {
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
                            <Project {...{ project, editProject, deleteProject }} />
                        </motion.div>
                    ))}
                    {isAdmin && loading !== "initial" && (
                        <motion.div
                            {...STAGGER_UP(projects.length)}
                            key="add-project"
                            className="col-12 col-md-6 col-lg-4 col-xl-3"
                            layout>
                            <ProjectAdd {...{ getProjects, editProject }} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {!isAdmin && loading !== "initial" && projects.length === 0 && (
                        <motion.p {...STAGGER_UP()} className="col-12 text-white" layout>
                            {`You don't have any projects yet`}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
