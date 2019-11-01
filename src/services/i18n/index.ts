import { IReduxEntry } from 'utils/types/app';

import { reducer, actions, selectors } from './redux';

export { reducer, actions, selectors };
export { I18nProvider } from './view/I18nProvider/I18nProvider';
export { ITranslateProps, ITranslateFunction, ITranslateKey, IReduxState } from './namespace';
export { LanguageSelector } from './view/LanguageSelector/LanguageSelector';
export { useTranslate } from './hooks/useTranslate';
export { tKeys } from './constants';

export const reduxEntry: IReduxEntry = {
  reducers: { i18n: reducer },
};
