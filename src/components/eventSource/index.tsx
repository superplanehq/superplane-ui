import * as React from "react"

import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card"

const COLOR_CLASSES = {
  gray: {
    section: "bg-gray-100",
    accent: "bg-gray-500",
  },
  amber: {
    section: "bg-amber-100",
    accent: "bg-amber-500",
  },
  green: {
    section: "bg-green-100",
    accent: "bg-green-500",
  },
  sky: {
    section: "bg-sky-100",
    accent: "bg-sky-500",
  },
} as const

export type EventSourceColor = keyof typeof COLOR_CLASSES

export interface EventSourceProps {
  title: string
  content: string
  color: EventSourceColor
  footerContent?: React.ReactNode
  className?: string
}

export const EVENT_SOURCE_COLORS: EventSourceColor[] = Object.keys(
  COLOR_CLASSES,
) as EventSourceColor[]

export const EventSource: React.FC<EventSourceProps> = ({
  title,
  content,
  color,
  footerContent,
  className,
}) => {
  const { section: sectionBackground, accent: accentBackground } =
    COLOR_CLASSES[color] ?? COLOR_CLASSES.gray

  return (
    <div className={cn("relative h-72 w-[26rem]", className)}>
      <span
        className={cn(
          "absolute left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full",
          accentBackground,
        )}
      />
      <Card className="grid h-full w-full grid-rows-[2fr_1fr] overflow-hidden border-2 border-black bg-white p-0 shadow-none">
        <div className="grid h-full grid-rows-[auto_1fr]">
          <CardHeader
            className={cn(
              "justify-center space-y-2 rounded-none text-base text-neutral-900",
              sectionBackground,
            )}
          >
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent
            className={cn(
              "h-full rounded-none p-6 text-sm leading-relaxed text-neutral-900",
              sectionBackground,
            )}
          >
            {content}
          </CardContent>
        </div>
        <CardFooter className="items-center bg-white p-6 text-neutral-900">
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  )
}
