/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import marksy from 'marksy';
import { useEffect, useState, createElement } from 'react';
import Paragraph from './Paragraph';
import Image from './Image';
import Heading from './Heading';

const RenderMarkdown = ({ content }) => {
  const [parsedMarkdown, setParsedMarkdown] = useState();
  console.log(content);
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
                maxWidth: blockType === 'wide' ? content : 650,
                my: float ? 0 : 7,
                width: float ? '460px' : '100%',
                mx: 'auto',

                ...(float && {
                  mb: 4,

                  ...(float === 'right' && {
                    pl: 7,
                  }),
                  ...(float === 'left' && {
                    pr: 7,
                  }),
                }),

                float: float ? float : 'none',
              }}
            >
              <Image src={src} alt={alt} sx={{ width: '100%' }} />
              {caption && (
                <div
                  sx={{
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: 'neutral.7',
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
            variant="heading4"
            sx={{ margin: 'auto', maxWidth: 650, width: '100%', mb: 4, mt: 6 }}
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
                  margin: 'auto',
                  maxWidth: 650,
                  width: '100%',
                  mb: 4,
                  ':first-child': { variant: 'text.callout', mb: 5 },
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
            <Image
              src={src}
              alt={alt}
              sx={{ maxWidth: 'content', my: 7, width: '100%' }}
            />
          );
        },
        code({ language, code }) { },
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
