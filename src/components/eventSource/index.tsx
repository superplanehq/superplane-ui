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
  "gray-300": "bg-gray-300",
  "amber-300": "bg-amber-300",
  "green-500": "bg-green-500",
  "sky-300": "bg-sky-300",
} as const

export type EventSourceColor = keyof typeof COLOR_CLASSES

export interface EventSourceProps {
  title: string
  content: string
  headerColor: EventSourceColor
  contentColor: EventSourceColor
  footerContent?: React.ReactNode
  className?: string
}

export const EVENT_SOURCE_COLORS: EventSourceColor[] = Object.keys(
  COLOR_CLASSES,
) as EventSourceColor[]

export const EventSource: React.FC<EventSourceProps> = ({
  title,
  content,
  headerColor,
  contentColor,
  footerContent,
  className,
}) => {
  const headerBackground = COLOR_CLASSES[headerColor] ?? COLOR_CLASSES["gray-300"]
  const contentBackground =
    COLOR_CLASSES[contentColor] ?? COLOR_CLASSES["gray-300"]

  return (
    <Card
      className={cn(
        "grid h-full grid-rows-[2fr_1fr] overflow-hidden border border-black bg-white p-0 shadow-none",
        className,
      )}
    >
      <div className="grid h-full grid-rows-[auto_1fr]">
        <CardHeader
          className={cn(
            "justify-center space-y-2 rounded-none text-base text-neutral-900",
            headerBackground,
          )}
        >
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent
          className={cn(
            "h-full rounded-none p-6 text-sm leading-relaxed text-neutral-900",
            contentBackground,
          )}
        >
          {content}
        </CardContent>
      </div>
      <CardFooter className="items-center bg-white p-6 text-neutral-900">
        {footerContent}
      </CardFooter>
    </Card>
  )
}
