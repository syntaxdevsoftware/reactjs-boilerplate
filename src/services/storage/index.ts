const STORAGE_PREFIX = "SOME_CUSTOM_REFIX";

type StorageKey = "i18n";

export const get = (key: StorageKey) => {
  const item = localStorage.getItem(`${STORAGE_PREFIX}_${key}`);

  try {
    return JSON.parse(item);
  } catch (err) {
    return item;
  }
};

export const set = async (key: StorageKey, data: any) => {
  return localStorage.setItem(key, data);
};
