/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Input from './Input';
import Text from './Text';

interface Props {
  // title?: string;
  // imageSrc: string;
  // description: string;
  // tag: string;
  // timePublished: string;
  // readingLength: string;
  // to: string;
}

const SubscribeForm = ({ ...props }: Props): JSX.Element => {
  return (
    <div {...props}>
      <Flex sx={{ mb: 3 }}>
        <Input
          placeholder="Enter your email"
          sx={{ boxShadow: '0 2px 4px 0 #006ECC', mr: 2 }}
        />
        <button
          sx={{
            borderRadius: 32,
            height: 56,
            bg: 'secondary',
            boxShadow: '0 2px 4px 0 #006ECC',
            outline: 'none',
            border: 'none',
            color: 'primary',
            fontFamily: 'body',
            fontSize: '1',
            px: 5,
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
