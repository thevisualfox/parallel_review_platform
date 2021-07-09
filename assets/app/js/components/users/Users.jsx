/* Packages */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

/* Components */
import { User } from '../../components';

/* Animations */
import { SCALE_FADE } from '../../animations';

export default function Users({ users, layout = 'full', useLayout = true, ...rest }) {
	const sliceAmount = layout === 'minimal' ? 7 : Infinity;

	/* Render */
	return (
		<div className="row align-items-center gutters-1">
			<AnimatePresence>
				{users.slice(0, sliceAmount).map((user) => {
					return (
						<motion.div layout={useLayout} {...SCALE_FADE} className="col-auto" key={user.id}>
							<User {...{ user, ...rest }} />
						</motion.div>
					);
				})}
				{layout === 'minimal' && users.length > 7 && (
					<motion.div layout {...SCALE_FADE} className="col-auto" key="more">
						<p className="text--sm text-muted--70 ml-1">+ {users.length - sliceAmount}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
