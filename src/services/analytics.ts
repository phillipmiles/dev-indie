import firebase from './firebase';
import { newError } from '../errors/handleError';

export const initAnalytics = (): void => {
  try {
    firebase.analytics();
  } catch (error) {
    throw newError(error);
  }
};

// Generic event logger function.
export const logEvent = (...args: unknown[]): void => {
  firebase.analytics().logEvent(...args);
};

export const logLogin = (method: string): void => {
  firebase.analytics().logEvent('login', { method });
};

export const logRegister = (method: string): void => {
  firebase.analytics().logEvent('sign_up', { method });
};

export const setPageView = (screenName: string): void => {
  firebase.analytics().setCurrentScreen(screenName);
};

export const logPageView = (): void => {
  firebase.analytics().logEvent('page_view');
};

export const setUserId = (id: string, options: unknown): void => {
  firebase.analytics().setUserId(id, options);
};
