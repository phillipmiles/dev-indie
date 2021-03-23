import { useEffect } from 'react';
import WebFont from 'webfontloader';

const FontLoader = ({ children }) => {
  useEffect(() => {
    WebFont.load({
      typekit: {
        id: 'ner5ewy'
      }
    });
  }, []);

  return children;
};

export default FontLoader;
