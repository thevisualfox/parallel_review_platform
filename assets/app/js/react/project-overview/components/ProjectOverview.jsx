/* Packages */
import React, { useEffect } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";

/* Components */
import { Project } from "./project";
import { ProjectAdd } from "./project-add";

/* Animations */
import { STAGGER_UP } from "../../common/animations";

/* Global state */
import { loadingState, projectsState } from "../state";

export default function ProjectOverview({ isAdmin }) {
    /* State */
    const [projects, setProjects] = useRecoilState(projectsState);
    const [loading, setLoading] = useRecoilState(loadingState);

    /* Effects */
    useEffect(() => getProjects(), []);

    /* Callbacks */
    const getProjects = async () => {
        try {
            const result = await axios.get("/projects/get");

            if (result.data) setProjects(result.data);
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
                            <Project {...{ project, getProjects }} />
                        </motion.div>
                    ))}
                    {isAdmin && loading !== "initial" && (
                        <motion.div
                            {...STAGGER_UP(projects.length)}
                            key="add-project"
                            className="col-12 col-md-6 col-lg-4 col-xl-3"
                            layout>
                            <ProjectAdd {...{ getProjects }} />
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
        </>
    );
}
