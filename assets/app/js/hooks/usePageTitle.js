import { useEffect } from 'react';

export default function usePageTitle(title, updateProps = []) {
	useEffect(() => {
		document.title = `${title ? title + ' | Parallel Dashboard' : document.title}`;
	}, [...updateProps]);
}
