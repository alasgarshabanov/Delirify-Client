import * as moment from "moment";

/**
 * Get from the local storage based on key name
 *
 * @param {string} key
 * @returns {any|undefined}
 */
export const getStorageKey = (key) => {
  try {
    const serialized = localStorage.getItem(key);

    if (serialized === null) {
      return undefined;
    }

    if (typeof serialized.validTill !== 'undefined')
      if (serialized.validTill > moment.now())
        removeStorageKey(key);

    return JSON.parse(serialized);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

/**
 * Will save serialized data to local storage
 * @param key
 * @param state
 */
export const saveStorageKey = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.warn(err);
  }
};

/**
 * Remove existing
 * @param key
 * @returns {boolean}
 */
export const removeStorageKey = (key) => {
  try {
    if (localStorage.getItem(key))
      localStorage.removeItem(key);
    return true;
  } catch (err) {
    console.warn(err);
  }
};

