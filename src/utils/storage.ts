export type StorageGet = (key: string) => string | null;
export type StorageSet = (key: string, value: string) => boolean;
export type StorageRemove = (key: string) => boolean;

const hasWindow = () => typeof window !== "undefined";

export const safeLocalStorage: {
  get: StorageGet;
  set: StorageSet;
  remove: StorageRemove;
} = {
  get(key) {
    if (!hasWindow()) return null;
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    if (!hasWindow()) return false;
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    if (!hasWindow()) return false;
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};

export const safeSessionStorage: {
  get: StorageGet;
  set: StorageSet;
  remove: StorageRemove;
} = {
  get(key) {
    if (!hasWindow()) return null;
    try {
      return window.sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    if (!hasWindow()) return false;
    try {
      window.sessionStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    if (!hasWindow()) return false;
    try {
      window.sessionStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};
