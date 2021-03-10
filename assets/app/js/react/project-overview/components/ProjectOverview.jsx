/* Packages */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

/* Components */
import { Project } from "./project";
import { ProjectAdd } from "./project-add";

/* Animations */
import { STAGGER_UP } from "../../common/animations";

/* Global state */
import { adminState, projectsState, userState } from "../state";

/* Api calls */
import { API_KEYS, fetchProjectsByUser } from "../api";

export default function ProjectOverview() {
    /* State */
    const [projects, setProjects] = useRecoilState(projectsState);
    const setUser = useSetRecoilState(userState);
    const isAdmin = useRecoilValue(adminState);

    /* Hooks */
    const { isLoading: projectsLoading } = useQuery(API_KEYS.PBU, fetchProjectsByUser, {
        onSuccess: ({ projects, user }) => {
            setProjects(projects);
            setUser(user);
        },
    });

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
                            <Project {...{ project }} />
                        </motion.div>
                    ))}
                    {isAdmin && !projectsLoading && (
                        <motion.div
                            {...STAGGER_UP(projects.length)}
                            key="add-project"
                            className="col-12 col-md-6 col-lg-4 col-xl-3"
                            layout>
                            <ProjectAdd />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {!isAdmin && !projectsLoading && projects.length === 0 && (
                        <motion.p {...STAGGER_UP()} className="col-12 text-white" layout>
                            {`You don't have any projects yet`}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
