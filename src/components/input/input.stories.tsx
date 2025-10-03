import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/button';
import { Input } from './input';
import { Label } from '../label/label';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
};

export const File: StoryObj<typeof Input> = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input {...args} id="picture" type="file" />
    </div>
  ),
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
    type: 'email',
    placeholder: 'Email',
  },
};

export const WithLabel: StoryObj<typeof Input> = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithButton: StoryObj<typeof Input> = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};
