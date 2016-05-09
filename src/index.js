const i18n = require('i18next');

i18n.init({
  // "debug": true,
  "lng": "nl",
  // "fallbackLng": false,
  // "keySeparator": false,
  // "nsSeparator": false,
  "returnEmptyString": false,
  resources: {
    en: {
      translation: require('../i18n/en/translation.json'),
    },
    nl: {
      translation: require('../i18n/nl/translation.json'),  
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  console.log(i18n.t('Hello'));
  console.log(i18n.t('Number'));
  console.log(i18n.t('Number', { count: 1 }));
  console.log(i18n.t('Number', { count: 5 }));
  consolle.log(i18n.t('Goodbye'));
});
