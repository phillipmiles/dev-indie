import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const getPlatformIcon = (platformId) => {
  if (platformId === 'android') {
    return faAndroid;
  } else if (platformId === 'web') {
    return faCode;
  }
};
