import React from 'react';

import { LinkButton } from '../components/LinkButton/LinkButton';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {}
};

const Template = (args) => (
  <LinkButton {...args}>
    Link Button
  </LinkButton>
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => console.log('Button clicked')
};
