/* Components */
import React from 'react';
import { useContext } from 'react';

/* Components */
import { Modal, LoginForm, SignupForm } from '..';
import { StaticContext } from '../../context';

export default function SecurityModal({ securityModalOpen, setSecurityModalOpen }) {
	/* Hooks */
	const { currentUser, userRole } = useContext(StaticContext);

	/* Constants */
	const title = userRole === 'basic' ? 'Signup' : 'Login';
	const subtitle = `${title} if you want to comment`;

	/* Callbacks */
	const toggleSecurityModal = () => setSecurityModalOpen(!securityModalOpen);

	/* Render */
	return (
		<Modal {...{ title, subtitle, modalOpen: securityModalOpen, toggleModal: toggleSecurityModal }}>
			{userRole === 'basic' ? (
				<SignupForm
					{...{
						currentUser,
						toggleModal: toggleSecurityModal,
						showLogin: false,
					}}
				/>
			) : (
				<LoginForm
					{...{
						currentUser,
						toggleModal: toggleSecurityModal,
						showSignup: false,
					}}
				/>
			)}
		</Modal>
	);
}
