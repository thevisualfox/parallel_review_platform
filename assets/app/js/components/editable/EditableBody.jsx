/* Packages */
import React, { useEffect, useRef, useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';

/* Assets */
import { useMutation } from 'react-query';

/* Elements */
import { Button } from '../../components';

/* Services */
import { capitalizeFirstLetter } from '../../services';

export default function EditableBody({ fields, toggleModal, mutation, mutationId, mutationOnSuccess }) {
	/* Refs */
	const formRef = useRef();

	/* Mutations */
	const editMutation = useMutation(mutation, {
		onSuccess: () => {
			mutationOnSuccess();
			toggleModal();
		},
	});

	/* Render */
	return (
		<form
			ref={formRef}
			className="d-flex flex-column align-items-center flex-grow-1 position-relative"
			onSubmit={(event) => {
				event.preventDefault();
				editMutation.mutate({ formRef, id: mutationId });
			}}>
			{fields.map((field, fieldIndex) => {
				return <Field key={fieldIndex} {...{ ...field, shouldFocus: fieldIndex === 0 }} />;
			})}
			<Button
				{...{
					title: 'Save',
					contentType: fields.length === 1 ? 'icon' : 'text',
					extensionClasses: fields.length === 1 ? 'form-control-btn' : 'px-8 mt-3',
					theme: fields.length === 1 ? 'default' : 'secondary',
					isLoading: editMutation.isLoading,
					type: 'submit',
				}}
			/>
		</form>
	);
}

const Field = ({ name, defaultValue, shouldFocus = false }) => {
	/* State */
	const [value, setValue] = useState(defaultValue);

	/* Refs */
	const inputRef = useRef();

	/* Effects */
	useEffect(() => {
		if (inputRef?.current && shouldFocus) inputRef?.current?.select();
	}, []);

	/* Render */
	return (
		<>
			<label className="sr-only" htmlFor={name}>
				{name}
			</label>
			<TextareaAutosize
				className="form-control form-control--text"
				id={name}
				name={name}
				type="text"
				value={value}
				onChange={({ target: { value } }) => setValue(value)}
				ref={inputRef}
				placeholder={capitalizeFirstLetter(name)}
				onFocus={() => inputRef.current.select()}
			/>
		</>
	);
};
