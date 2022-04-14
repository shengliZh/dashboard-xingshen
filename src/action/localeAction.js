import * as TYPES from "../redux/type/types";

export const changeLocale = (locale) => {
  return {
    type: TYPES.CURRENT_LOCALE,
    payload: locale,
  };
};

export const initLocale = initDone => {
  return {
    type: TYPES.INIT_LOCALE_DONE,
    payload: initDone
  }
}
