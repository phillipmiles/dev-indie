/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Input from './Input';
import Text from './Text';

interface Props {
  shadow: boolean;
}

const SubscribeForm = ({ shadow, ...props }: Props): JSX.Element => {
  return (
    <div {...props}>
      <Flex sx={{ mb: 3, flexDirection: ['column', 'row'] }}>
        <Input
          placeholder="Enter your email"
          sx={{
            ...(shadow && {
              boxShadow: '0 2px 4px 0 #006ECC',
            }),
            mr: [0, 2],
            mb: ['12px', 0],
            textAlign: ['center', 'left'],
          }}
        />
        <button
          sx={{
            borderRadius: 32,
            height: 56,
            bg: 'secondary',
            ...(shadow && {
              boxShadow: '0 2px 4px 0 #006ECC',
            }),
            outline: 'none',
            border: 'none',
            color: 'primary',
            fontFamily: 'body',
            fontSize: '1',
            px: 5,
            width: ['100%', 'auto'],
          }}
        >
          Subscribe
        </button>
      </Flex>
      <Text variant="detail" sx={{ textAlign: 'center', display: 'block' }}>
        Unsubscribe at <span sx={{ fontStyle: 'italic' }}>any</span> time
      </Text>
    </div>
  );
};

export default SubscribeForm;
