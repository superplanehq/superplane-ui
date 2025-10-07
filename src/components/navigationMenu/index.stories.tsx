import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./index"

type NavigationLink = {
  label: string
  href: string
  active?: boolean
}

type NavigationMenuStoryArgs = React.ComponentProps<typeof NavigationMenu> & {
  items: NavigationLink[]
}

const meta = {
  title: "components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    viewport: {
      control: { type: "boolean" },
      table: { category: "Layout" },
    },
    className: {
      control: { type: "text" },
      table: { category: "Layout" },
    },
  },
} satisfies Meta<typeof NavigationMenu>

export default meta

type Story = StoryObj<NavigationMenuStoryArgs>

const NavigationMenuDemo = ({ items, className, viewport, ...props }: NavigationMenuStoryArgs) => (
  <div className="w-full border-b border-border bg-background">
    <div className="mx-auto flex w-full max-w-4xl justify-center px-4 py-8">
      <NavigationMenu
        className={cn("max-w-full justify-center gap-1", className)}
        viewport={viewport}
        {...props}
      >
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                active={item.active}
                className={navigationMenuTriggerStyle()}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div>
  </div>
)

const baseArgs: NavigationMenuStoryArgs = {
  viewport: false,
  className: "",
  items: [
    { label: "Overview", href: "#", active: true },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}

export const Default: Story = {
  args: baseArgs,
  render: (args) => <NavigationMenuDemo {...args} />,
}

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "hover:bg-accent focus-visible:ring-ring/50 group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus-visible:ring-[3px] focus-visible:outline-1",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

const gettingStartedItems = [
  {
    title: "Introduction",
    href: "#introduction",
    description: "Understand the foundations of our design system and component APIs.",
  },
  {
    title: "Quickstart",
    href: "#quickstart",
    description: "Spin up a new project and add the core Superplane UI primitives in minutes.",
  },
  {
    title: "Theming",
    href: "#theming",
    description: "Customize tokens, colors, and typography to match your product brand.",
  },
]

const resourceItems = [
  {
    title: "Changelog",
    href: "#changelog",
    description: "Track the latest component releases, fixes, and improvements.",
  },
  {
    title: "Templates",
    href: "#templates",
    description: "Explore ready-to-use layouts built with the Superplane UI suite.",
  },
  {
    title: "Support",
    href: "#support",
    description: "Reach our team for questions, onboarding help, or enterprise needs.",
  },
]

const NavigationMenuDropdownDemo = ({
  items: _items,
  className,
  viewport,
  ...props
}: NavigationMenuStoryArgs) => (
  <div className="w-full border-b border-border bg-background">
    <div className="mx-auto flex w-full max-w-4xl justify-center px-4 py-8">
      <NavigationMenu
        className={cn("max-w-full justify-center gap-1", className)}
        viewport={viewport}
        {...props}
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[450px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="from-accent/10 to-background flex h-full flex-col justify-end rounded-md bg-gradient-to-b p-6">
                  <div className="text-lg font-medium">superplane-ui</div>
                  <p className="text-muted-foreground mt-2 text-sm">
                    A scalable component library for shipping polished product experiences quickly.
                  </p>
                </li>
                {gettingStartedItems.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[300px]">
                {resourceItems.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#docs">
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
)

const dropdownArgs: NavigationMenuStoryArgs = {
  ...baseArgs,
  viewport: true,
}

export const Dropdown: Story = {
  args: dropdownArgs,
  argTypes: {
    items: { control: { disable: true } },
  },
  render: (args) => <NavigationMenuDropdownDemo {...args} />,
}
