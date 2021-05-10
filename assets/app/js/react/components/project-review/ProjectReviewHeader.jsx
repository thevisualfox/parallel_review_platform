/* Packages */
import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';

/* Components */
import { Editable } from '../editable';

/* Context */
import staticContext from '../../context';

/* Api */
import { editProjectImage, QUERY_KEYS } from '../../api';

export default function ProjectReviewHeader({ id, title, description }) {
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
						projectId={id}
						content={title}
						mutation={editProjectImage}
						mutationId={id}
						{...{ mutationOnSuccess }}>
						<h1 className="h5 mb-0 text-white">{title ? title : 'Add a nice title'}</h1>
					</Editable>
				</div>
				<div className={`${userRole === 'admin' && 'editable'} d-flex align-items-center mb-2`}>
					<Editable
						inputType="description"
						content={description}
						mutation={editProjectImage}
						mutationId={id}
						{...{ mutationOnSuccess }}>
						<p className="text-muted--70 mb-0">
							{description ? (
								<span>{description}</span>
							) : (
								<span className="text-muted--40">
									Add a decription - the purpose, context, objectives
								</span>
							)}
						</p>
					</Editable>
				</div>
			</div>
		</div>
	);
}
