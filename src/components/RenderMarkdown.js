/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, useThemeUI } from 'theme-ui';
import marksy from 'marksy';
import { useEffect, useState, createElement } from 'react';
import Paragraph from './Paragraph';
import Image from './Image';
import Heading from './Heading';
import Text from './Text';
import LazyLoader from './LazyLoader';

// XXX Parcel v1 is once again having troubles with it's imports. Should be fixed
// in Parcel v2. Current work around is to directly import from the common js module.
// See... https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/180
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeLangJsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

console.log(prism);

SyntaxHighlighter.registerLanguage('jsx', codeLangJsx);

const RenderMarkdown = ({ content }) => {
  const [parsedMarkdown, setParsedMarkdown] = useState();

  const context = useThemeUI();
  const { theme, components, colorMode, setColorMode } = context;

  useEffect(() => {
    const compile = marksy({
      // Pass in whatever creates elements for your
      // virtual DOM library. h('h1', {})
      createElement,
      components: {
        Image({ blockType, src, alt, float, caption }) {
          return (
            <div
              sx={{
                clear: 'both',
                maxWidth: blockType === 'wide' ? [650, 650, 'content'] : 650,
                my: float ? [6, 6, 0] : [6, 6, 6],

                width: float ? ['100%', '100%', '460px'] : '100%',
                mx: 'auto',

                ...(float && {
                  mb: [6, 6, 4],

                  ...(float === 'right' && {
                    pl: [0, 0, 6],
                  }),
                  ...(float === 'left' && {
                    pr: [0, 0, 6],
                  }),
                }),

                float: float ? ['none', 'none', float] : 'none',

                ':first-child': {
                  mt: 0,
                },
              }}
            >
              {/* Need to standardise image heights so lazy loader knows
              what to do and to avoid content layout shifts. */}
              <LazyLoader height={200}>
                <Image src={src} alt={alt} sx={{ width: '100%' }} />
              </LazyLoader>
              {caption && (
                <div
                  sx={{
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    // borderBottomColor: 'neutral.7',
                    borderBottomColor: '#D4DBE6',
                  }}
                >
                  <Paragraph
                    variant="detail"
                    sx={{ my: 2, color: 'neutral.7' }}
                  >
                    {caption}
                  </Paragraph>
                </div>
              )}
            </div>
          );
        },
      },
      elements: {
        // Supress rendering h1. Post title is pulled from the post object not from
        // the markdown file.
        h1: () => null,
        h2: ({ id, children }) => (
          <Heading
            as="h2"
            sx={{
              variant: ['text.heading5', 'text.heading4'],
              margin: 'auto',
              maxWidth: 650,
              width: '100%',
              mb: 4,
              mt: 6,
            }}
          >
            {children}
          </Heading>
        ),

        h3({ id, children }) { },
        h4({ id, children }) { },
        blockquote({ children }) { },
        hr() { },
        ol({ children }) { },
        ul({ children }) { },
        p({ children, context, ...props }) {
          console.log('context', context);
          console.log('children', children);
          // if (children[0].startsWith('<img') && children.endsWith('/>')) {
          //   return children;
          // } else {

          // Checks if this paragraph is containing only an image. If so, don't wrap it in
          // paragraph tags.
          if (
            !children[0] &&
            !children[2] &&
            children[1] &&
            children[1].type.name === 'img'
          ) {
            return children;
          } else {
            return (
              <Paragraph
                sx={{
                  mx: 'auto',
                  maxWidth: 650,
                  width: '100%',
                  ':first-of-type': {
                    variant: ['text.body', 'text.callout'],
                    mb: [4, 5],
                  },
                  ':last-of-type': { mb: 0 },
                }}
              >
                {children}
              </Paragraph>
            );
          }
        },
        table({ children }) { },
        thead({ children }) { },
        tbody({ children }) { },
        tr({ children }) { },
        th({ children }) { },
        td({ children }) { },
        a({ href, title, target, children }) { },
        strong({ children }) {
          return <strong>{children}</strong>;
        },
        em({ children }) { },
        br() { },
        del({ children }) { },
        img({ src, alt }) {
          return (
            <LazyLoader>
              <Image
                src={src}
                alt={alt}
                sx={{ maxWidth: 'content', my: [6, 6], width: '100%' }}
              />
            </LazyLoader>
          );
        },
        code({ language, code }) {
          return (
            <div
              sx={{
                maxWidth: 698,
                mx: 'auto',
                my: [6, 6],
                width: '100%',
                position: 'relative',
                background: theme.colors.black,
                borderRadius: 8,
              }}
            >
              <Text
                sx={{ position: 'absolute', top: 2, right: 4, color: 'white' }}
              >
                {language}
              </Text>
              <SyntaxHighlighter
                language={language}
                style={{
                  ...prism,
                  ...{
                    atrule: {
                      color: 'red',
                    },
                    'attr-name': {
                      // color: 'white',
                      color: '#0087FE',
                    },
                    'attr-value': {
                      color: 'red',
                    },

                    // italic: {

                    // },
                    // bold: {

                    // },
                    doctype: {
                      color: 'red',
                    },
                    // Brackets and semicolans
                    punctuation: {
                      color: theme.colors.white,
                    },
                    regex: {
                      color: 'red',
                    },
                    cdata: {
                      color: 'red',
                    },
                    char: {
                      color: 'red',
                    },
                    symbol: {
                      color: 'red',
                    },
                    inserted: {
                      color: 'red',
                    },
                    'class-name': {
                      color: '#15D1AF',
                    },
                    keyword: {
                      // color: '#F479FF',
                      // color: '#0087FE',
                      color: theme.colors.primary,
                    },
                    namespace: {
                      color: 'red',
                    },
                    builtin: {
                      color: 'red',
                    },
                    prolog: {
                      color: 'red',
                    },
                    url: {
                      color: 'red',
                    },
                    property: {
                      color: 'red',
                    },
                    deleted: {
                      color: 'red',
                    },
                    // html tag
                    tag: {
                      color: '#00C2FF',
                      // color: theme.colors.primaryLight,
                    },
                    selector: {
                      color: 'red',
                    },
                    entity: {
                      color: 'red',
                    },
                    important: {
                      color: 'red',
                    },
                    constant: {
                      color: 'red',
                    },
                    boolean: {
                      color: '#00C2FF',
                    },
                    string: {
                      color: '#F34E5F',
                    },
                    number: {
                      color: '#F479FF',
                      // color: '#FFEF64',
                    },
                    function: {
                      color: '#FFEF64',
                      // color: theme.colors.secondary,
                    },
                    variable: {
                      color: 'red',
                    },
                    comment: {
                      color: '#009C48',
                    },
                    operator: {
                      color: theme.colors.white,
                    },
                    'pre[class*="language-"]': {
                      ...prism['pre[class*="language-"]'],
                      background: 'transparent',
                      // color: theme.colors.white,
                      color: '#00F0FF',
                      textShadow: 'none',
                      padding: 24,
                      margin: 0,
                    },
                    'code[class*="language-"]': {
                      ...prism['code[class*="language-"]'],
                      // color: theme.colors.white,
                      color: '#00F0FF',
                      textShadow: 'none',
                      fontSize: '16px',
                    },
                  },
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          );
          // return (
          //   <pre sx={{ maxWidth: 650, mx: 'auto', width: '100%' }}>
          //     <code>{code}</code>
          //   </pre>
          // );
        },
        codespan({ children }) { },
      },
    });

    const compiled = compile(content.content, {
      // Options passed to "marked" (https://www.npmjs.com/package/marked)
    });

    // compiled.tree // The React tree of components
    // compiled.toc // The table of contents, based on usage of headers
    console.log('compiled', compiled);
    setParsedMarkdown(compiled.tree);
  }, [content]);

  console.log('here', parsedMarkdown);
  return parsedMarkdown ? parsedMarkdown : null;
};

RenderMarkdown.propTypes = {};

export default RenderMarkdown;
