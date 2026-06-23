/**
 * Storage utility for managing application data with localStorage
 */

const STORAGE_KEYS = {
  USERS: 'elyu_users',
  JOBS: 'elyu_jobs',
  PROJECTS: 'elyu_projects',
  APPLICATIONS: 'elyu_applications',
  CURRENT_USER: 'elyu_current_user',
};

/**
 * Get all items from a storage collection
 */
export function getAll(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading ${key}:`, error);
    return [];
  }
}

/**
 * Get a single item by ID
 */
export function getById(key, id) {
  const items = getAll(key);
  return items.find((item) => item.id === id);
}

/**
 * Add a new item to a collection
 */
export function add(key, item) {
  try {
    const items = getAll(key);
    const newItem = {
      ...item,
      id: item.id || generateId(),
      createdAt: item.createdAt || new Date().toISOString(),
    };
    items.push(newItem);
    localStorage.setItem(key, JSON.stringify(items));
    return newItem;
  } catch (error) {
    console.error(`Error adding to ${key}:`, error);
    return null;
  }
}

/**
 * Update an existing item
 */
export function update(key, id, updates) {
  try {
    const items = getAll(key);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;

    items[index] = {
      ...items[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(items));
    return items[index];
  } catch (error) {
    console.error(`Error updating ${key}:`, error);
    return null;
  }
}

/**
 * Delete an item by ID
 */
export function remove(key, id) {
  try {
    const items = getAll(key);
    const filtered = items.filter((item) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error(`Error deleting from ${key}:`, error);
    return false;
  }
}

/**
 * Clear all items from a collection
 */
export function clear(key) {
  try {
    localStorage.setItem(key, JSON.stringify([]));
    return true;
  } catch (error) {
    console.error(`Error clearing ${key}:`, error);
    return false;
  }
}

/**
 * Generate a unique ID
 */
export function generateId() {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get current logged-in user
 */
export function getCurrentUser() {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Set current logged-in user
 */
export function setCurrentUser(user) {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } catch (error) {
    console.error('Error setting current user:', error);
  }
}

/**
 * Clear current user (logout)
 */
export function clearCurrentUser() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  } catch (error) {
    console.error('Error clearing current user:', error);
  }
}

export { STORAGE_KEYS };
