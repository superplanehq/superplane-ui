import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../checkbox/checkbox';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<typeof Label> = {
  args: {
    htmlFor: 'email',
    children: 'Your email address',
  },
};

export const WithCheckbox: StoryObj<typeof Label> = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label {...args} htmlFor="terms">
        Accept terms and conditions
      </Label>
    </div>
  ),
};
