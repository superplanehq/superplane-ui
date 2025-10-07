import type { Meta, StoryObj } from "@storybook/react"

import { ReactFlowCanvas } from "./index"

const meta = {
  title: "components/ReactFlowCanvas",
  component: ReactFlowCanvas,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    containerClassName: {
      control: { type: "text" },
      table: { category: "Layout" },
    },
    containerStyle: {
      control: { disable: true },
    },
    nodes: {
      control: { disable: true },
    },
    edges: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof ReactFlowCanvas>

export default meta

type Story = StoryObj<typeof ReactFlowCanvas>

export const Default: Story = {
  args: {
    containerClassName: "h-[480px]",
    fitView: true,
    nodes: [],
    edges: [],
  },
  render: (args) => <ReactFlowCanvas {...args} />,
}
