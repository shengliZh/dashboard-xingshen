import * as TYPES from "../type/types";

const initState = {
  currentLocale: "zh-CN",
  initDone: false,
};

const LocaleReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.CURRENT_LOCALE:
      return {
        ...state,
        currentLocale: action.payload,
      };
    case TYPES.INIT_LOCALE_DONE:
      return {
        ...state,
        initDone: action.payload,
      };
    default:
      return state;
  }
};

export default LocaleReducer;
