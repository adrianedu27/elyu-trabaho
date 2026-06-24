// Local storage helpers for elyu-trabaho
1
const STORAGE_KEYS = {
  USERS: 'elyu_users',
  JOBS: 'elyu_jobs',
  PROJECTS: 'elyu_projects',
  APPLICATIONS: 'elyu_applications',
  CURRENT_USER: 'elyu_current_user',
};

// get all items
export function getAll(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading ${key}:`, error);
    return [];
  }
}

// get by id
export function getById(key, id) {
  const items = getAll(key);
  return items.find((item) => item.id === id);
}

// add new item
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

// update item
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

// delete item
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

// clear collection
export function clear(key) {
  try {
    localStorage.setItem(key, JSON.stringify([]));
    return true;
  } catch (error) {
    console.error(`Error clearing ${key}:`, error);
    return false;
  }
}

// simple id generator
export function generateId() {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// auth helpers
export function getCurrentUser() {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export function setCurrentUser(user) {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } catch (error) {
    console.error('Error setting current user:', error);
  }
}

export function clearCurrentUser() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  } catch (error) {
    console.error('Error clearing current user:', error);
  }
}

export { STORAGE_KEYS };
