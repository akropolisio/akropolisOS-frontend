import Polyglot from 'node-polyglot';

import { IAction } from 'utils/types/redux';

import { tKeys } from './constants';

export interface IReduxState {
  data: {
    currentLocale: Lang;
  };
}

type CustomTranslateFunction = (phrase: ITranslateKey) => string;
interface IPhraseWithOptions {
  key: string;
  params: Record<string, string | number>;
}

export type ITranslateFunction = Polyglot['t'] & CustomTranslateFunction;
export type ITranslateKey = string | IPhraseWithOptions;

export type Lang = 'en' | 'ru';

export interface ITranslateProps {
  locale: Lang;
  tKeys: typeof tKeys;
  t: ITranslateFunction;
}

export type IChangeLanguage = IAction<'I18N_SERVICE:CHANGE_LANGUAGE', Lang>;

export type Action = IChangeLanguage;
