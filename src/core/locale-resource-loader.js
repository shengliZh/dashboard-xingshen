import intl from "react-intl-universal";
import { useDispatch } from "react-redux";
import { initLocale } from "../action/localeAction";

const locales = {
  "zh-CN": require("../locales/zh_CN.json"),
  "en-US": require("../locales/en_US.json"),
};

const LocaleResourceLoader = (locale) => {
  const dispatch = useDispatch();
  // Since intl is a singlton, you don't need to init it again.
  // Just load the locale data in the component.
  intl.init({ currentLocale: locale, locales }).then(() => {
    dispatch(initLocale(true));
  });
};

export default LocaleResourceLoader;
