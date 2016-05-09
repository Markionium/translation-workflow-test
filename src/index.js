const i18n = require('i18next');
const uiLocale = 'nl';
const fallbackLng = 'fr';

i18n.init({
  // "debug": true,
  "lng": uiLocale,
  "fallbackLng": fallbackLng,
  "returnEmptyString": false,
  resources: {
    [uiLocale]: {
      translation:  require(`../i18n/${uiLocale}.json`),
    },
    [fallbackLng]: {
      translation: require(`../i18n/${fallbackLng}.json`),
    },
  }
}, (err, t) => {
  // initialized and ready to go!
  console.log(i18n.t('Hello'));
  console.log(i18n.t('Number'));
  console.log(i18n.t('Number', { count: 1 }));
  console.log(i18n.t('Number', { count: 5 }));
  console.log(i18n.t('Goodbye'));
});
