/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Heading from './Heading';
import Image from './Image';
import Paragraph from './Paragraph';
import Text from './Text';
import Link from './Link';
import LazyLoader from '../components/LazyLoader';
import LinkCard from './LinkCard';

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
    <LinkCard
      {...props}
      to={to}
      sx={{ display: 'flex', flexDirection: ['column', 'row'] }}
    >
      <Link
        to={to}
        sx={{
          mr: [0, 6],
          mb: [4, 0],
          borderRadius: 6,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <LazyLoader height={192}>
          <Image
            src={imageSrc}
            sx={{
              width: ['100%', '328px'],
              height: '192px',
              objectPosition: '50% 50%',
              objectFit: 'cover',
            }}
          />
        </LazyLoader>
      </Link>
      <Flex sx={{ justifyContent: 'center', flexDirection: 'column' }}>
        <Link to={to}>
          <Heading
            as="h4"
            sx={{
              mb: [2, '12px'],
              variant: ['text.heading5', 'text.heading4'],
            }}
          >
            {title}
          </Heading>
          <Paragraph sx={{ mb: [2, 3] }}>{description}</Paragraph>
        </Link>
        <Flex sx={{ color: 'neutral.7' }}>
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
    </LinkCard>
  );
};

export default PostListItem;
