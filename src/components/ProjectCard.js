/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, Flex } from 'theme-ui';
import Text from './Text';
import Link from './Link';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routeUrls from '../router/routeUrls';
import { getPlatformIcon } from '../resolvers/platforms';
import Button from '../components/Button';

const ProjectCard = ({
  title,
  url,
  description,
  srcThumb,
  platforms,
  stack,
  ...props
}) => {
  const platformIcons = platforms.map((platform) => ({
    id: 'platform',
    icon: getPlatformIcon(platform),
  }));

  return (
    <Flex
      sx={{
        bg: 'neutral.9',
        borderRadius: '6px',
        overflow: 'hidden',
        // minHeight: 420,
      }}
      {...props}
    >
      <Flex
        sx={{
          py: 5,
          pl: 5,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Flex sx={{ mb: 3 }}>
            {platformIcons.map((platform) => (
              <Flex
                key={platform.id}
                sx={{
                  bg: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 60,
                  width: '40px',
                  height: '40px',
                  mr: 4,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'primary',
                }}
              >
                <FontAwesomeIcon
                  icon={platform.icon}
                  sx={{
                    color: 'primary',
                    width: '20px !important',
                    height: '20px',
                  }}
                />
              </Flex>
            ))}
          </Flex>
          <Heading as="h2" variant="heading4" sx={{ mb: 4 }}>
            {title}
          </Heading>
          <Paragraph sx={{}}>{description}</Paragraph>
          <Flex sx={{ mb: 4 }}>
            {stack.map((item) => (
              <Text
                key={item}
                variant="detail"
                sx={{ color: 'neutral.7', mr: 4 }}
              >
                {item}
              </Text>
            ))}
          </Flex>
        </div>
        <Button
          to={`${routeUrls.projects}/${url}`}
          sx={{ alignSelf: 'flex-start' }}
        >
          View project
        </Button>
      </Flex>
      <Link
        to={`${routeUrls.projects}/${url}`}
        sx={{
          width: '60%',
          flexShrink: 0,
          ml: 6,
          overflow: 'hidden',
        }}
      >
        <Image
          src={srcThumb}
          sx={{
            objectFit: 'cover',
            transform: 'scale(1)',
            transition: 'transform 200ms',
            width: '100%',
            height: '100%',
            ':hover': { transform: 'scale(1.025)' },
          }}
        />
      </Link>
    </Flex>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  srcThumb: PropTypes.string,
  platforms: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
