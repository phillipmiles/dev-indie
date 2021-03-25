/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Heading from './Heading';
import Image from './Image';
import Paragraph from './Paragraph';
import Text from './Text';
import Link from './Link';

interface Props {
  title?: string;
  imageSrc: string;
  description: string;
  tag: string;
  timePublished: string;
  readingLength: string;
  to: string;
}

const PostListItem = ({
  title,
  imageSrc,
  description,
  tag,
  timePublished,
  readingLength,
  to,
  ...props
}: Props): JSX.Element => {
  return (
    <Flex {...props}>
      <Link to={to} sx={{ mr: 6, borderRadius: 24, overflow: 'hidden' }}>
        <Image
          src={imageSrc}
          alt={title}
          sx={{
            width: '328px',
            height: '192px',
            objectPosition: '50% 50%',
            objectFit: 'cover',
          }}
        />
      </Link>
      <Flex sx={{ justifyContent: 'center', flexDirection: 'column' }}>
        <Link to={to}>
          <Heading as="h4" sx={{ mb: '12px' }}>
            {title}
          </Heading>
          <Paragraph>{description}</Paragraph>
        </Link>
        <Flex sx={{ color: 'neutral.6' }}>
          <Text variant="detail" sx={{ mr: 4, fontWeight: 'bold' }}>
            {tag}
          </Text>
          <Text variant="detail" sx={{ mr: 4, fontWeight: 'bold' }}>
            {timePublished}
          </Text>
          <Text variant="detail" sx={{ mr: 4, fontWeight: 'bold' }}>
            {readingLength}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostListItem;
