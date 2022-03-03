import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {};

/**
 * 格式化i18n包，将语言包拼接成类似 pages.login.login
 * @param {*} namespace
 * @param {*} localeMessage
 * @returns {Object}
 */
const parseLocaleMessagesWithNamespace = function (namespace, localeMessage) {
  if (!namespace) {
    return localeMessage;
  }
  namespace = namespace.replace(/\//g, ".");
  const newMessages = {};
  console.log("local messages entires", Object.entries(localeMessage));
  for (const [key, value] of Object.entries(localeMessage)) {
    newMessages[namespace + "." + key] = value;
  }
  return newMessages;
};

const requireAll = (requireContext) =>
  requireContext.keys().map((path) => {
    const regex = new RegExp(
      "^\\./(?<locale>[\\w-_]+)/(?<namespace>.+)\\.(?<ext>json|ya?ml|json5)$"
    );
    const localeJson = requireContext(path);
    const match = regex.exec(path);
    if (match && match.length > 0) {
      const { locale, namespace } = match.groups || {};
      const localeMessages = messages[locale] || {};
      const messageWithNamespace = parseLocaleMessagesWithNamespace(
        namespace,
        localeJson
      );
      messages[locale] = { ...localeMessages, ...messageWithNamespace };
    }
  });

requireAll(require.context("./", true, /\.json$/));

console.log("messages", messages);

export const defaultLang = "zh-CN";

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages,
});

export default i18n;

export function i18nRender(key) {
  return i18n.t(key);
}
