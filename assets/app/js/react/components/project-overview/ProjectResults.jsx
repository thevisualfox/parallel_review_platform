/* Packages */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Components */
import { Project, ProjectActionMenu } from './';

/* Animations */
import { FADE_IN, STAGGER_UP } from '../../common/animations';

export default function ProjectResults({ projects, newProjectId, isLoading }) {
	/* State */
	const [selectedProjects, setSelectedProjects] = useState([]);

	/* Callbacks */
	const updateSelectedProjects = (id) => {
		setSelectedProjects((projects) => {
			if (projects.includes(id)) {
				return projects.filter((projectId) => projectId !== id);
			}

			return [...projects, id];
		});
	};

	const resetSelectedProjects = () => setSelectedProjects([]);

	/* Render */
	return (
		<>
			<h1 className="h5 text-white mb-6">Your projects</h1>
			<AnimatePresence>
				{!isLoading && projects.length === 0 && (
					<motion.p {...FADE_IN} className="text-white mb-0 position-absolute">
						{`You don't have any projects yet`}
					</motion.p>
				)}
			</AnimatePresence>
			<div className={`row row--equalized gutters-5 ${selectedProjects.length > 0 && 'has-selections'}`}>
				<AnimatePresence>
					{projects
						.filter((project) => project.id !== newProjectId)
						.map((project, projectIndex) => (
							<motion.div
								{...STAGGER_UP(projectIndex)}
								key={project.id}
								className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
								layout>
								<Project {...{ project, selectedProjects, updateSelectedProjects }} />
							</motion.div>
						))}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{selectedProjects.length > 0 && <ProjectActionMenu {...{ selectedProjects, resetSelectedProjects }} />}
			</AnimatePresence>
		</>
	);
}
