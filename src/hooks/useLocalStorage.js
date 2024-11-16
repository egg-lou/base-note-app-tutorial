import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Initialize state with value from localStorage or initialValue
  // Uses lazy initialization to only run this code once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Try to get value from localStorage
      const item = window.localStorage.getItem(key);
      // Parse stored json or return initialValue if none exists
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error (e.g., invalid JSON), return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage whenever stored value changes
  useEffect(() => {
    try {
      // Save state changes to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Handle errors (e.g., localStorage full)
      console.error(error);
    }
  }, [key, storedValue]); // Only run if key or storedValue changes

  // Return state and setter just like useState
  return [storedValue, setStoredValue];
}