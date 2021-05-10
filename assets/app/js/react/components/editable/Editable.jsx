/* Packages */
import React, { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { Box } from '../../common';

/* Assets */
import editIcon from 'icons/edit.svg';

/* Context */
import StaticContext from '../../context';

/* Components */
import EditableBody from './EditableBody';

export default function Editable({ inputType, children, ...rest }) {
	/* State */
	const [boxOpen, setBoxOpen] = useState(false);

	/* Hooks */
	const { userRole } = useContext(StaticContext);

	/* Constants */
	const header = `Edit ${inputType}...`;

	/* Callbacks */
	const toggleBox = () => setBoxOpen(!boxOpen);

	/* Render */
	return (
		<div className="editable d-flex align-items-center position-relative">
			<div className="editable__content">{children}</div>
			{userRole === 'admin' && (
				<>
					<button
						className="editable__toggle btn btn-link icon-wrapper icon-wrapper--secondary icon-wrapper--interactive stretched-link ml-3"
						onClick={toggleBox}
						style={{ '--size': '25px' }}>
						<ReactSVG wrapper="svg" className="icon icon--10 text-secondary" src={editIcon} />
					</button>
					<Box {...{ header, boxOpen, toggleBox }}>
						<EditableBody {...{ header, inputType, toggleBox, ...rest }} />
					</Box>
				</>
			)}
		</div>
	);
}
