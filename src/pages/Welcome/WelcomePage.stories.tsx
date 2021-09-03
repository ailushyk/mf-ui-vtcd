import { WelcomePage, WelcomeProps } from './WelcomePage';
import { Story } from '@storybook/react';

export default {
  component: WelcomePage,
  title: 'Pages/Welcome',
};

const Template: Story<WelcomeProps> = (args) => {
  return <WelcomePage {...args} />;
};

const items = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  'Animi, architecto assumenda autem dicta ducimus esse inventore ipsa maxime minima.',
  'Numquam obcaecati quam ratione reiciendis repellendus sunt tempore?',
];

export const Simple = Template.bind({});
Simple.args = {
  header: 'Welcome',
  items,
};
