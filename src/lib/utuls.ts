export default class Utils {
  static isBoolean(value): boolean { return isBoolean(value); }
  static isNil(value): boolean { return isNil(value); }
  static isString(value): boolean { return isString(value); }
};

export const isBoolean = (value:any): boolean => {
  return value === true || value === false; // todo not completed; to complete from 'lodash'
};

export const isNil = (value:any): boolean => {
  // from 'lodash'
  return value == null;
};

export const isString = (value:any): boolean => {
  return typeof value == 'string'; // todo not completed; to complete from 'lodash'
};

export const pull = (array:any[], item:any): any[] => {
  // modified 'remove' from 'lodash'
  // mutate array
  const result = [];
  if (!(array && array.length)) {
    return result;
  }
  const indexes = [];

  array.forEach((value, index) => {
    if (value === item) {
      result.push(value);
      indexes.push(index);
    }
  });

  for (const index of indexes.reverse()) {
    array.splice(index, 1);
  }
  return result;
};

export const reverse = (array:any[]): any[] => {
  // from 'lodash'
  return array == null ? array : array.reverse();
};
