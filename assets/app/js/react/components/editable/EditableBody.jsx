/* Packages */
import React, { useEffect, useRef, useState } from 'react';

/* Assets */
import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../api';

/* Elements */
import { Button } from '../../elements';

export default function EditableBody({ header, inputType, toggleBox, content, projectId, mutation, mutationId }) {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [value, setValue] = useState(content);

	/* Refs */
	const formRef = useRef();
	const inputRef = useRef();

	/* Effects */
	useEffect(() => {
		if (inputRef?.current) inputRef?.current?.select();
	}, []);

	/* Mutations */
	const editMutation = useMutation(mutation, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]);
			toggleBox();
		},
	});

	/* Render */
	return (
		<form
			ref={formRef}
			className="d-flex flex-column align-items-center flex-grow-1"
			onSubmit={(event) => {
				event.preventDefault();
				editMutation.mutate({ formRef, id: mutationId });
			}}>
			<label className="sr-only" htmlFor={inputType}>
				{header}
			</label>
			<input
				className="form-control form-control-sm"
				id={inputType}
				name={inputType}
				type="text"
				value={value}
				onChange={({ target: { value } }) => setValue(value)}
				ref={inputRef}
			/>
			<Button
				title="Done"
				extensionClasses="mt-4 w-50 justify-content-center"
				isLoading={editMutation.isLoading}
				type="submit"
			/>
		</form>
	);
}
