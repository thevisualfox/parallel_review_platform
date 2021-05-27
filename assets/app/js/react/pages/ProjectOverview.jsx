/* Packages */
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';

/* Components */
import { ProjectResults, ProjectAdd } from '../components/project-overview';
import { PageLoader } from '../common';
import { HeaderNavigation } from '../components';

/* Context */
import StaticContext from '../context';

/* Api */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

/* Hooks */
import { usePageTitle } from '../hooks';

export default function ProjectOverview() {
	/* State */
	const [newProjectId, setNewProjectId] = useState();

	/* Hooks */
	usePageTitle('Projects');
	const { currentUser, userRole } = useContext(StaticContext);

	/* Queries */
	const { isLoading, data: projects = [] } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId: currentUser?.id }),
		{
			enabled: !!currentUser?.id,
		}
	);

	/* Render */
	return (
		<>
			<HeaderNavigation />
			<main className="main-content">
				<section className="pane py-5 py-lg-10">
					<div className="container-fluid">
						<PageLoader {...{ isLoading }}>
							{userRole === 'admin' && <ProjectAdd {...{ setNewProjectId }} />}
							<ProjectResults {...{ projects, newProjectId }} />
						</PageLoader>
					</div>
				</section>
			</main>
		</>
	);
}
