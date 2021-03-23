export default {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  sizes: {
    content: 1080,
  },
  fonts: {
    body: 'filson-pro, sans-serif',
    heading: 'filson-pro, sans-serif',
    // Menlo is a nice backup shipped with Mac OSX Snow Leopard only.
    monospace: 'source-code-pro, Menlo, monospace',
  },
  fontSizes: [
    13.5, 18, 23.99, 31.98, 42.63, 56.83, 75.76
  ],
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
    black: "#262C35",
    text: '#262C35',
    background: '#fff',
    primary: '#007BE4',
    secondary: '#FFC700',
    neutral: ['', '', '', '', '', '', '', '', '#ECF4FA', '', ''],
  },
  styles: {
    // Global styles applied to the body element.
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1
    },
  },
  forms: {
    input: {
      borderColor: 'neutral.8',
      pl: '12px',
      pr: '12px',
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
  },
};
