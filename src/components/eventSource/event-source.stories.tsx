import type { Meta, StoryObj } from "@storybook/react"

import { EVENT_SOURCE_COLORS, EventSource } from "./index"

const meta = {
  title: "components/Event Source",
  component: EventSource,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    headerColor: {
      control: { type: "select" },
      options: EVENT_SOURCE_COLORS,
    },
    contentColor: {
      control: { type: "select" },
      options: EVENT_SOURCE_COLORS,
    },
    className: {
      control: { type: "text" },
    },
    footerContent: {
      control: { disable: true },
    },
  },
  args: {
    title: "Product Launch",
    content: "Stay up to date with the latest changes from your sources.",
    headerColor: "amber-300",
    contentColor: "sky-300",
    className: "h-72 w-80",
    footerContent: "More details",
  },
} satisfies Meta<typeof EventSource>

export default meta

type Story = StoryObj<typeof EventSource>

export const Default: Story = {}
