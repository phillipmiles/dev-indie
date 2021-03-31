/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Link from './Link';
import Image from './Image';
import Text from './Text';
import Heading from './Heading';
import Paragraph from './Paragraph';

const LinkCard = ({ children, to, ...props }) => (
  <LinkCard>
    <Image
      src={posts[2].thumbSrc}
      sx={{
        height: 280,
        objectFit: 'cover',
        width: '100%',
        borderRadius: '6px',
        mb: 3,
      }}
    />
    <Link sx={{ mb: 2 }}>
      <Text
        variant="detail"
        sx={{
          color: 'primary',
          ':hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {posts[0].tag}
      </Text>
    </Link>
    <Heading as="h2" variant="heading4" sx={{ mb: 4, mt: 2 }}>
      {posts[2].title}
    </Heading>
    <Paragraph>{posts[2].description}</Paragraph>
  </LinkCard>
);

LinkCard.propTypes = {};

export default LinkCard;
