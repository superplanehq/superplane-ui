import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon, Loader2Icon } from 'lucide-react';
import { IconGitBranch } from '@tabler/icons-react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Icon: Story = {
  args: {
    variant: 'secondary',
    size: 'icon',
    className: 'size-8',
    children: <ChevronRightIcon />,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: (
      <>
        <IconGitBranch /> New Branch
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    size: 'sm',
    disabled: true,
    children: (
      <>
        <Loader2Icon className="animate-spin" /> Please wait
      </>
    ),
  },
};
