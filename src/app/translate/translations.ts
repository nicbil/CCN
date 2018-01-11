// app/translate/translation.ts
import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_TRANS } from './lang-en';
import { LANG_RU_TRANS } from './lang-ru';
// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all traslations
const dictionary = {
  'en': LANG_EN_TRANS,
  'ru': LANG_RU_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];
