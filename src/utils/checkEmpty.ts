export const isEmpty = (obj: any): boolean => {
  if (obj) {
    return Object.keys(obj).length === 0;
  } else return false;
};
