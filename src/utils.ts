import _ from 'lodash';

export const convertObjectKeysToCamelCase = <T extends any>(obj: T): T => {
  if (typeof (obj) !== 'object') {
    return obj;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const snakeKey = _.camelCase(key);
      if (snakeKey !== key) {
        obj[snakeKey] = obj[key];
        delete obj[key];
      }
      if (typeof (obj[snakeKey]) === 'object') {
        obj[snakeKey] = convertObjectKeysToCamelCase(obj[snakeKey]);
      }
    }
  }

  return obj;
};

export const urlTo = {
  home: '/',
};
