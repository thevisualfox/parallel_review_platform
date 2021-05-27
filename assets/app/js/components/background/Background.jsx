/* Packages */
import React from 'react';

/* Assets */
import bg from 'images/background-login.jpg';
import bgRetina from 'images/background-login@2x.jpg';

export default function Background() {
	/* Render */
	return (
		<div className="background">
			<img className="background__image" src={bg} srcSet={bgRetina} alt="Background" />
		</div>
	);
}
