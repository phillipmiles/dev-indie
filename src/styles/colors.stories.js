/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Paragraph from '../components/Paragraph';
import FlexCol from '../components/FlexCol';
import FlexColItem from '../components/FlexColItem';

const Swatch = ({ color, labelColor, children, ...props }) => (
  <div
    {...props}
    sx={{
      bg: color,
      color: labelColor ? labelColor : 'text',
      borderRadius: 16,
      p: 4,
      boxShadow: '0px 4px 8px -2px rgba(0,0,0,0.2)',
      textAlign: 'center',
    }}
  >
    <Paragraph>{color}</Paragraph>
  </div>
);

export default {
  title: 'Styles/Colors',
  component: Paragraph,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = () => {
  return (
    <div>
      <Paragraph>Main colors</Paragraph>
      <FlexCol gutter={4} margin={[3, 4]} sx={{ position: 'relative', pb: 5 }}>
        <FlexColItem cols={2}>
          <Swatch color="primary" />
        </FlexColItem>
        <FlexColItem cols={2}>
          <Swatch color="secondary" />
        </FlexColItem>
        <FlexColItem cols={2}>
          <Swatch color="black" labelColor="white" />
        </FlexColItem>
        <FlexColItem cols={2}>
          <Swatch color="white" />
        </FlexColItem>
      </FlexCol>
      <Paragraph>Neutral colors</Paragraph>
      <FlexCol gutter={4} margin={[3, 4]} sx={{ position: 'relative', py: 5 }}>
        <FlexColItem cols={2}>
          <Swatch color="neutral.6" />
        </FlexColItem>
        <FlexColItem cols={2}>
          <Swatch color="neutral.7" />
        </FlexColItem>
        <FlexColItem cols={2}>
          <Swatch color="neutral.8" />
        </FlexColItem>
      </FlexCol>
    </div>
  );
};

// Template.bind({});

Primary.args = {
  primary: true,
};
