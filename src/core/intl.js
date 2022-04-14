import intl from "react-intl-universal";

const getIntl = (key, params) => {
  return params ? intl.get(key) : intl.get(key, params);
};

const getIntlHtml = (key, params) => {
  return params ? intl.getHTML(key) : intl.getHTML(key, params);
};

export { getIntl, getIntlHtml };
