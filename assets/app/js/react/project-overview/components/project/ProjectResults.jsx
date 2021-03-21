/* Packages */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Components */
import Project from "./Project";

/* Animations */
import { STAGGER_UP } from "../../../common/animations";

export default function ProjectResults({ projects, children }) {
    /* Render */
    return (
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
                {children}
            </AnimatePresence>
        </div>
    );
}
