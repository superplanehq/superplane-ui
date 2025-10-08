import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

import githubIcon from "@/assets/integrations/github.svg"
import kubernetesIcon from "@/assets/integrations/kubernetes.svg"
import pagerDutyIcon from "@/assets/integrations/pagerduty.svg"
import dataDogIcon from "@/assets/integrations/datadog.svg"

import { EventSource } from "./index"

const INTEGRATIONS = {
  github: {
    label: "GitHub",
    sectionTone: "bg-gray-100",
    badgeTone: "bg-gray-950",
    iconSrc: githubIcon,
    description: "Connect GitHub events to trigger downstream workflows.",
  },
  kubernetes: {
    label: "Kubernetes",
    sectionTone: "bg-blue-100",
    badgeTone: "bg-blue-500",
    iconSrc: kubernetesIcon,
    description: "Track cluster events and alert on deployment health.",
  },
  pagerduty: {
    label: "PagerDuty",
    sectionTone: "bg-green-100",
    badgeTone: "bg-green-500",
    iconSrc: pagerDutyIcon,
    description: "Acknowledge incidents and automate on-call responses.",
  },
  datadog: {
    label: "DataDog",
    sectionTone: "bg-purple-100",
    badgeTone: "bg-purple-500",
    iconSrc: dataDogIcon,
    description: "Ingest infrastructure metrics and anomaly alerts.",
  },
} as const

type IntegrationKey = keyof typeof INTEGRATIONS
type StoryArgs = ComponentProps<typeof EventSource> & {
  integration: IntegrationKey
}

const meta = {
  title: "components/Event Source",
  component: EventSource,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    integration: {
      control: { type: "select" },
      options: Object.keys(INTEGRATIONS),
    },
    content: {
      control: { disable: true },
    },
    sectionTone: {
      control: { disable: true },
    },
    badgeTone: {
      control: { disable: true },
    },
    badgeImageSrc: {
      control: { disable: true },
    },
    badgeImageAlt: {
      control: { disable: true },
    },
    badgeLabel: {
      control: { disable: true },
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
    integration: "github" satisfies IntegrationKey,
    content: "",
    footerContent: "More details",
  },
  render: (args) => {
    const { integration, ...rest } = args as StoryArgs
    const config = INTEGRATIONS[integration] ?? INTEGRATIONS.github

    return (
      <EventSource
        {...rest}
        content={config.description}
        sectionTone={config.sectionTone}
        badgeTone={config.badgeTone}
        badgeLabel={config.label}
        badgeImageSrc={config.iconSrc}
      />
    )
  },
} satisfies Meta<StoryArgs>

export default meta

type Story = StoryObj<StoryArgs>

export const Default: Story = {}
