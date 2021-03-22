export default {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    body: 'Droid Sans, system-ui, sans-serif',
    heading: 'Droid Serif, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    neutral: ['', '', '', '', '', '', '', '', '#ccc', '', ''],
  },
  styles: {
    // Global styles applied to the body element.
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
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
