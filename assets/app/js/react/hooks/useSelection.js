import { useState } from 'react';

export default function useSelection() {
	const [selected, setSelected] = useState([]);

	const updateSelected = (id) => {
		setSelected((selected) => {
			if (selected.includes(id)) {
				return selected.filter((selectedId) => selectedId !== id);
			}

			return [...selected, id];
		});
	};

	const resetSelected = () => setSelected([]);

	return { selected, updateSelected, resetSelected };
}
