import { Layout, LayoutProps } from './Layout';
import { Text } from '../../elements';
import { Story } from '@storybook/react';

export default {
  component: Layout,
  title: 'Components/Layout',
};

const Template: Story<LayoutProps> = (args) => {
  return (
    <Layout {...args}>
      <Text>Main content here</Text>
    </Layout>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  header: 'Example',
};

export const WithoutHeader = Template.bind({});
