import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

import githubIcon from "@/assets/icons/integrations/github.svg"
import kubernetesIcon from "@/assets/icons/integrations/kubernetes.svg"
import pagerDutyIcon from "@/assets/icons/integrations/pagerduty.svg"
import dataDogIcon from "@/assets/icons/integrations/datadog.svg"
import scheduleIcon from "@/assets/icons/schedule.svg"

import { EventSource, type EventSourceProps } from "./index"

const TYPES = {
  github: {
    label: "GitHub",
    sectionTone: "bg-gray-100",
    badgeTone: "bg-gray-950",
    iconSrc: githubIcon,
    title: "GitHub Source",
    resource: {
      label: "superplane-ui",
      href: "https://github.com/superplanehq/superplane-ui",
      icon: "github",
    },
    eventType: { label: "push" } as EventSourceProps["eventType"],
    filters: ["branch = main", "status = success"] as string[],
    events: [
      {
        status: "success",
        title: "fix: open rejected events tab when the sidebar is already open",
        timestamp: "2m ago",
        badges: [{ label: "push" }],
        href: "#",
      },
    ] satisfies EventSourceProps["events"],
  },
  kubernetes: {
    label: "Kubernetes",
    sectionTone: "bg-blue-100",
    badgeTone: "bg-blue-500",
    iconSrc: kubernetesIcon,
    title: "Cluster Events",
    resource: {
      label: "prod-cluster",
      href: "https://k8s.superplane.dev",
      icon: "boxes",
    },
    eventType: { label: "deployment" } as EventSourceProps["eventType"],
    filters: ["namespace = prod", "kind = deployment"] as string[],
    events: [
      {
        status: "info",
        title: "traffic-split applied to gateway",
        timestamp: "Just now",
        badges: [{ label: "mesh" }],
      },
      {
        status: "warning",
        title: "pod restart threshold exceeded",
        timestamp: "3m ago",
        badges: [{ label: "alert", variant: "destructive" }],
      },
    ] satisfies EventSourceProps["events"],
  },
  pagerduty: {
    label: "PagerDuty",
    sectionTone: "bg-green-100",
    badgeTone: "bg-green-500",
    iconSrc: pagerDutyIcon,
    title: "PagerDuty Incidents",
    resource: {
      label: "On-call schedule",
      href: "https://pagerduty.com",
      icon: "alarm-clock",
    },
    eventType: { label: "incident" } as EventSourceProps["eventType"],
    filters: ["urgency = high"] as string[],
    events: [
      {
        status: "error",
        title: "Payment gateway outage",
        timestamp: "5m ago",
        badges: [{ label: "sev1", variant: "destructive" }],
      },
    ] satisfies EventSourceProps["events"],
  },
  datadog: {
    label: "DataDog",
    sectionTone: "bg-purple-100",
    badgeTone: "bg-purple-500",
    iconSrc: dataDogIcon,
    title: "DataDog Monitors",
    resource: {
      label: "APM metrics",
      href: "https://app.datadoghq.com",
      icon: "activity",
    },
    eventType: { label: "monitor" } as EventSourceProps["eventType"],
    filters: ["service = api", "env = prod"] as string[],
    events: [
      {
        status: "warning",
        title: "p99 latency above threshold",
        timestamp: "4m ago",
        badges: [{ label: "apm" }],
      },
      {
        status: "info",
        title: "cache hit rate recovered",
        timestamp: "8m ago",
        badges: [{ label: "cache" }],
      },
    ] satisfies EventSourceProps["events"],
  },
  schedule: {
    label: "Schedule",
    sectionTone: "bg-gray-100",
    badgeTone: "bg-gray-950",
    iconSrc: scheduleIcon,
    title: "Upcoming Schedules",
    resource: {
      label: "Release calendar",
      href: "https://calendar.superplane.dev",
      icon: "calendar-days",
    },
    eventType: { label: "release" } as EventSourceProps["eventType"],
    filters: ["team = frontend"] as string[],
    events: [
      {
        status: "info",
        title: "Frontend release 2024.07",
        timestamp: "Tomorrow",
        badges: [{ label: "calendar" }],
      },
    ] satisfies EventSourceProps["events"],
  },
} as const

type TypeKey = keyof typeof TYPES
type StoryArgs = ComponentProps<typeof EventSource> & {
  type: TypeKey
}

const meta = {
  title: "components/Event Source",
  component: EventSource,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: Object.keys(TYPES),
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
    title: "GitHub Source",
    type: "github" satisfies TypeKey,
    content: "",
    eventType: TYPES.github.eventType,
    filters: [...TYPES.github.filters],
    events: [...(TYPES.github.events ?? [])],
    selected: true,
  },
  render: (args) => {
    const { type, ...rest } = args as StoryArgs
    const config = TYPES[type] ?? TYPES.github

    return (
      <EventSource
        {...rest}
        title={config.title}
        content=""
        sectionTone={config.sectionTone}
        badgeTone={config.badgeTone}
        badgeLabel={config.label}
        badgeImageSrc={config.iconSrc}
        resource={config.resource}
        eventType={config.eventType}
        filters={config.filters}
        events={rest.events?.length ? rest.events : config.events}
      />
    )
  },
} satisfies Meta<StoryArgs>

export default meta

type Story = StoryObj<StoryArgs>

export const Default: Story = {}

export const ZeroState: Story = {
  args: {
    type: "github",
    events: [],
    selected: false,
  },
}
