/* Packages */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { Box, UserAddSearch } from '../../components';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

export default function UserAdd({ users, project }) {
	/* State */
	const [boxOpen, setBoxOpen] = useState(false);

	/* Callbacks */
	const toggleBox = () => setBoxOpen(!boxOpen);

	/* Render */
	return (
		<div className="position-relative ml-2">
			<button className="btn btn-link user user--lg user--add" type="button" onClick={toggleBox}>
				<span className="user__avatar">
					<div className="user__initials">
						<ReactSVG wrapper="svg" className="user__icon icon icon--12 mt-0" src={addUserIcon} />
					</div>
				</span>
			</button>
			<Box title="Select users" subtitle="Choose some users to collaborate with." {...{ boxOpen, toggleBox }}>
				<UserAddSearch {...{ users, project, toggleBox }} />
			</Box>
		</div>
	);
}
