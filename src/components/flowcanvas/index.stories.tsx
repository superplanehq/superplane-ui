import type { Meta, StoryObj } from "@storybook/react"

import { Canvas } from "./index"

const meta = {
  title: "components/Canvas",
  component: Canvas,
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
    showControls: {
      control: { type: "boolean" },
      table: { category: "Display" },
    },
    showMiniMap: {
      control: { type: "boolean" },
      table: { category: "Display" },
    },
  },
} satisfies Meta<typeof Canvas>

export default meta

type Story = StoryObj<typeof Canvas>

export const Default: Story = {
  args: {
    containerClassName: "h-[480px]",
    fitView: true,
    nodes: [],
    edges: [],
    showControls: true,
    showMiniMap: true,
  },
  render: (args) => <Canvas {...args} />,
}
