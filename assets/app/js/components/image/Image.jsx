/* Packages */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Image(props) {
	/* State */
	const [loaded, setLoaded] = useState(false);

	/* Constants*/
	const transition = {
		duration: 0.2,
		ease: [0.65, 0, 0.35, 1],
	};

	const variants = {
		hidden: {
			opacity: 0,
			transition,
		},
		visible: {
			opacity: 1,
			transition,
		},
	};

	/* Callbacks */
	const onLoad = () => setLoaded(true);

	/* Render */
	return (
		<motion.img
			key={props.src}
			initial="hidden"
			animate={loaded ? 'visible' : 'hidden'}
			{...{ ...props, onLoad, variants }}
		/>
	);
}
