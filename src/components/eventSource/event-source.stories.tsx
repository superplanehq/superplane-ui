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
    color: {
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
    title: "Special Event Source",
    content: "superplanehq/superplane",
    color: "gray",
    className: "",
    footerContent: "More details",
  },
} satisfies Meta<typeof EventSource>

export default meta

type Story = StoryObj<typeof EventSource>

export const Default: Story = {}
