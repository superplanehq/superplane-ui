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
  },
  kubernetes: {
    label: "Kubernetes",
    sectionTone: "bg-blue-100",
    badgeTone: "bg-blue-500",
    iconSrc: kubernetesIcon,
  },
  pagerduty: {
    label: "PagerDuty",
    sectionTone: "bg-green-100",
    badgeTone: "bg-green-500",
    iconSrc: pagerDutyIcon,
  },
  datadog: {
    label: "DataDog",
    sectionTone: "bg-purple-100",
    badgeTone: "bg-purple-500",
    iconSrc: dataDogIcon,
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
    events: {
      control: { type: "object" },
    },
  },
  args: {
    title: "Special Event Source",
    integration: "github" satisfies IntegrationKey,
    content: "",
    footerContent: "More details",
    resource: {
      label: "superplane-ui",
      href: "https://github.com/superplanehq/superplane-ui",
      icon: "marked-book",
    },
    eventType: {
      label: "push",
    },
    filters: ["branch = main", "status = success"],
  },
  render: (args) => {
    const { integration, ...rest } = args as StoryArgs
    const config = INTEGRATIONS[integration] ?? INTEGRATIONS.github

    return (
      <EventSource
        {...rest}
        content=""
        sectionTone={config.sectionTone}
        badgeTone={config.badgeTone}
        badgeLabel={config.label}
        badgeImageSrc={config.iconSrc}
        resource={rest.resource}
        eventType={rest.eventType}
        filters={rest.filters}
      />
    )
  },
} satisfies Meta<StoryArgs>

export default meta

type Story = StoryObj<StoryArgs>

export const Default: Story = {}

export const WithEvents: Story = {
  args: {
    events: [
      {
        status: "success",
        title: "Deployment completed",
        timestamp: "2m ago",
        badges: [{ label: "deploy" }, { label: "prod", variant: "secondary" }],
        href: "#",
      },
      {
        status: "warning",
        title: "High latency detected",
        timestamp: "5m ago",
        badges: [{ label: "alert", variant: "destructive" }],
      },
      {
        status: "error",
        title: "Failed to sync feature flags",
        timestamp: "10m ago",
        badges: [{ label: "sync" }],
      },
    ],
  },
}
