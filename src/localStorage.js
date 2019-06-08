export const storage = {
  get: (key) => {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  },
  set: (key, item) => {
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      localStorage.setItem(key, item);
    }
  },
};
