export default {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  sizes: {
    0: 0,
    1: 16,
    2: 24,
    3: 32,
    4: 40,
    5: 48,
    6: 56,
    7: 64,
    8: 96,
    9: 128,
    10: 192,
    11: 256,
    12: 360,
    13: 512,
    14: 928,
    // contentSmall: 1024,
    content: 1080,
  },
  fonts: {
    body: 'filson-pro, sans-serif',
    heading: 'filson-pro, sans-serif',
    // Menlo is a nice backup shipped with Mac OSX Snow Leopard only.
    monospace: 'source-code-pro, Menlo, monospace',
  },
  fontSizes: [13.5, 18, 23.99, 31.98, 42.63, 56.83, 75.76],
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.125,
    normal: 1.5,
  },
  // letterSpacings: {
  //   body: 'normal',
  //   caps: '0.2em',
  // },
  text: {
    heading1: {
      fontFamily: 'heading',
      fontSize: 6,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    heading2: {
      fontFamily: 'heading',
      fontSize: 5,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    heading3: {
      fontFamily: 'heading',
      fontSize: 4,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    heading4: {
      fontFamily: 'heading',
      fontSize: 3,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    heading5: {
      fontFamily: 'heading',
      fontSize: 2,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    heading6: {
      fontFamily: 'heading',
      fontSize: 1,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'normal',
      fontWeight: 'regular',
    },
    callout: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 'normal',
      fontWeight: 'regular',
    },
    detail: {
      fontFamily: 'body',
      fontSize: 0,
      lineHeight: 'normal',
      fontWeight: 'regular',
    },
  },
  colors: {
    white: '#ffffff',
    black: '#262C35',
    text: '#262C35',
    background: '#fff',
    primary: '#007BE4',
    primaryLight: '#59B3FF',
    secondary: '#FFC700',
    neutral: ['', '', '', '', '', '', '#8EADCD', '#98A3B2', '#ECF4FA', '', ''],
  },
  styles: {
    // Global styles applied to the body element.
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,

      '*': {
        WebkitFontSmoothing: 'antialiased !important',
        MozOsxFontSmoothing: 'grayscale !important',
        textRendering: 'optimizelegibility !important',
      },

      'h1, h2, h3, h4, h5, h6': {
        margin: 0,
      },

      p: {
        mt: 0,
        mb: 3,
      },

      a: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
      },

      img: {
        // Removes small bottom margin.
        display: 'block',
      },
    },
  },
  forms: {
    input: {
      bg: 'white',
      height: 56,
      borderRadius: 32,
      pl: 4,
      pr: 4,
      color: 'text',
      fontFamily: 'body',
      borderWidth: 0,
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
      },
      '::placeholder': {
        color: 'neutral.6',
      },
    },
  },
};
