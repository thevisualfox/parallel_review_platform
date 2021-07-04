/* Packags */
import { useCallback } from 'react';

/* Custom hook */
import useEventListener from './useEventListener';

export default function useCloseOnEsc(status, toggle) {
	/* Callback */
	const handleKeyUp = useCallback(({ key }) => {
		if (['Escape'].includes(key) && status) toggle();
	});

	/* Hook */
	useEventListener('keyup', handleKeyUp);
}
