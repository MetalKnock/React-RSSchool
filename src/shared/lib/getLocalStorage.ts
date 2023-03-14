import { KEY_LOCAL_STORAGE, LocalStoragePath } from '../config/constants';

const getLocalStorage = (path: LocalStoragePath): string | null => {
  const data = localStorage.getItem(KEY_LOCAL_STORAGE);
  return (data && JSON.parse(data)[path]) || null;
};

export { getLocalStorage };
