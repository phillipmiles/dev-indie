import {
  customErrorCodes as CCODES,
  firebaseErrorCodes as FCODES,
} from './errorCodes';

export const VALIDATION = 'validation';
export const EXCEPTION = 'exception';

export const errorDetails = {
  [FCODES.INSTALL__MISSING_CONFIG_VALUES]: {
    type: EXCEPTION,
    message: 'The analytics service has been incorrectly configured.',
  },
};

const fallbackMessage = 'Something went wrong.';

const getErrorDetails = (errorCode) => {
  if (errorDetails[errorCode]) {
    return errorDetails[errorCode];
  } else {
    return {
      type: EXCEPTION,
      message: fallbackMessage,
    };
  }
};

export default getErrorDetails;
