/* Packages */
import React, { useContext } from 'react';
import { UserAdd } from '../user-add';
import { Users } from '../users';

/* Context */
import staticContext from '../../context';

export default function ProjectDetailHeader({ title, description, users, id, author, email }) {
	/* Constants */
	const project = { id, author, email };

	/* Hooks */
	const { userRole } = useContext(staticContext);

	/* Render */
	return (
		<div className="row">
			<div className="col">
				<h1 className="h5 text-white mb-2">{title}</h1>
				<p className="text-muted--70">{description}</p>
			</div>
			<div className="col-auto d-flex align-items-baseline ml-auto">
				<Users {...{ users, project }} size="lg" />
				{userRole === 'admin' && <UserAdd {...{ users, project }} />}
			</div>
		</div>
	);
}
