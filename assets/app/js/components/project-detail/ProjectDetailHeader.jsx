/* Packages */
import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';

/* Components */
import { UserAdd } from '../user-add';
import { Users } from '../users';
import { Editable } from '../editable';

/* Context */
import staticContext from '../../context';

/* Api */
import { editProject, QUERY_KEYS } from '../../api';

export default function ProjectDetailHeader({ title, description, users, id, author, email }) {
	/* Constants */
	const project = { id, author, email };

	/* Hooks */
	const { userRole } = useContext(staticContext);
	const queryClient = useQueryClient();

	/* Callbacks */
	const mutationOnSuccess = () => {
		queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, id]);
	};

	/* Render */
	return (
		<div className="row mb-6">
			<div className="col-12 col-lg-6">
				<div className={`${userRole === 'admin' && 'editable'} d-flex align-items-center mb-2`}>
					<Editable
						inputType="title"
						content={title}
						mutation={editProject}
						mutationId={id}
						mutationOnSuccess={mutationOnSuccess}>
						<h1 className="h5 mb-0 text-white">{title ? title : 'Add a nice title'}</h1>
					</Editable>
				</div>
				<div className={`${userRole === 'admin' && 'editable'} d-flex align-items-center mb-2`}>
					<Editable
						inputType="description"
						content={description}
						mutation={editProject}
						mutationId={id}
						mutationOnSuccess={mutationOnSuccess}>
						<p className="text-muted--70 mb-0">
							{description ? (
								<span>{description}</span>
							) : (
								<span className="text-muted--40">
									{"What's this project about? Set the context, the goals, the constraints"}
								</span>
							)}
						</p>
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
