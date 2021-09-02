import NotFound from './NotFound';
import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export default {
  component: NotFound,
  title: 'Pages/Not Found',
  decorators: [
    (Story: Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: Story = () => <NotFound />;

export const Simple = Template.bind({});
