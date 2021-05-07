/* Packages */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

/* Components */
import { UserAdd } from '../user-add';
import { Users } from '../users';
import { Editable } from '../editable';

/* Context */
import staticContext from '../../context';

/* Animations */
import { FADE_IN } from '../../common/animations';
import { editProject } from '../../api';

export default function ProjectDetailHeader({ title, description, users, id, author, email }) {
	/* Constants */
	const project = { id, author, email };

	/* Hooks */
	const { userRole } = useContext(staticContext);

	/* Render */
	return (
		<div className="row mb-6">
			<div className="col-12 col-lg-6">
				<div className={`${userRole === 'admin' && 'editable'} d-flex align-items-center mb-2`}>
					<Editable inputType="title" projectId={id} content={title} mutation={editProject} mutationId={id}>
						<motion.h1 key={title} {...FADE_IN} className="h5 mb-0 text-white">
							{title ? title : 'Add a nice title'}
						</motion.h1>
					</Editable>
				</div>
				<div className={`${userRole === 'admin' && 'editable'} d-flex align-items-center mb-2`}>
					<Editable
						inputType="description"
						projectId={id}
						content={description}
						mutation={editProject}
						mutationId={id}>
						<motion.p key={description} {...FADE_IN} className="text-muted--70 mb-0">
							{description ? description : 'Add a decription about the project'}
						</motion.p>
					</Editable>
				</div>
			</div>
			<div className="col-auto d-flex align-items-baseline ml-auto">
				<Users {...{ users, project }} size="lg" />
				{userRole === 'admin' && <UserAdd {...{ users, project }} />}
			</div>
		</div>
	);
}
