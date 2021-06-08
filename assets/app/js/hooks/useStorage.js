import { useState } from 'react';

// Hook
export default function useStorage(key, initialValue, storageType = 'sessionStorage') {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window[storageType].getItem(key);

			// If no item value and initialValue is present, set as value
			if (initialValue && !item) {
				window[storageType].setItem(key, initialValue);
			}

			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to storage.
	const setValue = (value) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			window[storageType].setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			throw new Error(error);
		}
	};
	return [storedValue, setValue];
}
