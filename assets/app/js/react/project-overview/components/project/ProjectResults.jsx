/* Packages */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Components */
import Project from './Project';

/* Animations */
import { STAGGER_UP } from '../../../common/animations';

export default function ProjectResults({ projects, newProjectId, children }) {
	/* Render */
	return (
		<>
			<h1 className="h5 text-white mb-6">Your projects</h1>
			<div className="row row--equalized gutters-5">
				<AnimatePresence initial={false}>
					{projects
						.filter((project) => project.id !== newProjectId)
						.map((project, projectIndex) => (
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
		</>
	);
}
