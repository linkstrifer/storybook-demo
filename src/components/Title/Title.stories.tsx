import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Title',
};

export const H1 = Template.bind({});

H1.args = {
  ...Default.args,
  type: 'h1',
};

export const H2 = Template.bind({});

H2.args = {
  ...Default.args,
  type: 'h2',
};

export const H3 = Template.bind({});

H3.args = {
  ...Default.args,
  type: 'h3',
};

export const H4 = Template.bind({});

H4.args = {
  ...Default.args,
  type: 'h4',
};

export const H5 = Template.bind({});

H5.args = {
  ...Default.args,
  type: 'h5',
};

export const H6 = Template.bind({});

H6.args = {
  ...Default.args,
  type: 'h6',
};
