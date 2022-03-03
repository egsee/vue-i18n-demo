# Vue-i18n and VsCode i18n Ally Demo


### VSCODE settings.json config
```json
// vscode settings.json i18n-ally config
    "i18n-ally.localesPaths": [
        "src/locales",
        "src/i18n",
        "src/i18n/locale",
        "src/i18n/locales",
        "your i18n directory"
    ],
    "i18n-ally.enabledParsers": [
        "json",
        "js"
    ],
    "i18n-ally.languageTagSystem": "legacy",
    "i18n-ally.displayLanguage": "zh-CN",
    "i18n-ally.sourceLanguage": "zh-CN",
    "i18n-ally.namespace": true,
    "i18n-ally.pathMatcher": "{locale}/{namespaces}.{ext}",
    "i18n-ally.annotationInPlace": false,
    "i18n-ally.localeCountryMap": {
        "CHINA": "zh-CN",
        "ENGLISH": "en-US"
    },
    "i18n-ally.dirStructure": "auto",
    "i18n-ally.extract.autoDetect": true,
    "i18n-ally.readonly": false,

```

## Run

```shell
npm install
npm run dev
```
