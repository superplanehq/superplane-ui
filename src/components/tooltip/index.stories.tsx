import type { Meta, StoryObj } from "@storybook/react"
import { Plus } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./index"

const meta = {
  title: "components/Tooltip",
  component: TooltipContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      table: { category: "Layout" },
    },
    align: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
      table: { category: "Layout" },
    },
    children: {
      control: { type: "text" },
      table: { category: "Content" },
    },
  },
  args: {
    side: "top",
    align: "center",
    children: "Add to library",
  },
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger aria-label="Add">
          <Plus className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent {...args} />
      </Tooltip>
    </TooltipProvider>
  ),
} satisfies Meta<typeof TooltipContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Bottom: Story = {
  args: {
    side: "bottom",
  },
}

export const Left: Story = {
  args: {
    side: "left",
  },
}

export const Right: Story = {
  args: {
    side: "right",
  },
}
