/* Packages */
import React from 'react';

export default function PageWrapper({ children }) {
	/* Render */
	return (
		<main className="main-content">
			<section className="pane py-5 py-lg-10">
				<div className="container-fluid">{children}</div>
			</section>
		</main>
	);
}
