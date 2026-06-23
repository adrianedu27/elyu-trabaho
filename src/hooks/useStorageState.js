import { useState, useEffect } from 'react';

/**
 * Custom hook for managing state with localStorage persistence
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The initial value if not found in localStorage
 * @returns {[*, Function]} - The state value and setter function
 */
export function useStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage for key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error writing to localStorage for key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}
