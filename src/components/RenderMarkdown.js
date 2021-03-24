/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import marksy from 'marksy';
import { useEffect, useState } from 'react';
import { createElement } from 'React';
import Paragraph from './Paragraph';


const RenderMarkdown = ({ content }) => {
  const [parsedMarkdown, setParsedMarkdown] = useState();
  console.log(content);
  useEffect(() => {
    const compile = marksy({
      // Pass in whatever creates elements for your
      // virtual DOM library. h('h1', {})
      createElement,

      // You can override the default elements with
      // custom VDOM trees
      elements: {
        h1({ id, children }) {
          return <h1 className="my-custom-class">{children}</h1>
        },
        h2({ id, children }) { },
        h3({ id, children }) { },
        h4({ id, children }) { },
        blockquote({ children }) { },
        hr() { },
        ol({ children }) { },
        ul({ children }) { },
        p({ children }) { return <Paragraph>{children}</Paragraph> },
        table({ children }) { },
        thead({ children }) { },
        tbody({ children }) { },
        tr({ children }) { },
        th({ children }) { },
        td({ children }) { },
        a({ href, title, target, children }) { },
        strong({ children }) { return <strong>{children}</strong> },
        em({ children }) { },
        br() { },
        del({ children }) { },
        img({ src, alt }) { },
        code({ language, code }) { },
        codespan({ children }) { },
      },
    });

    const compiled = compile(content.content, {
      // Options passed to "marked" (https://www.npmjs.com/package/marked)
    });

    // compiled.tree // The React tree of components
    // compiled.toc // The table of contents, based on usage of headers
    console.log('compiled', compiled)
    setParsedMarkdown(compiled.tree);
  }, [content]);

  console.log('here', parsedMarkdown)
  return parsedMarkdown ? parsedMarkdown : null;
};

RenderMarkdown.propTypes = {};

export default RenderMarkdown;
