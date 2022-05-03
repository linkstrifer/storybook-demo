import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '../components/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Accordion Tittle',
  children: 'This is the content',
};

export const Open = Template.bind({});

Open.args = {
  ...Default.args,
  open: true,
};
