import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal, AlertCircle } from 'lucide-react';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const SimpleDefault: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertDescription>
        This is a simple alert without a title.
      </AlertDescription>
    </Alert>
  ),
};

export const SimpleDestructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertDescription>
        An error occurred. Please try again.
      </AlertDescription>
    </Alert>
  ),
};
