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
  "gray-100": "bg-gray-100",
  "amber-100": "bg-amber-100",
  "green-100": "bg-green-100",
  "sky-100": "bg-sky-100",
} as const

export type EventSourceColor = keyof typeof COLOR_CLASSES

export interface EventSourceProps {
  title: string
  content: string
  sectionColor: EventSourceColor
  footerContent?: React.ReactNode
  className?: string
}

export const EVENT_SOURCE_COLORS: EventSourceColor[] = Object.keys(
  COLOR_CLASSES,
) as EventSourceColor[]

export const EventSource: React.FC<EventSourceProps> = ({
  title,
  content,
  sectionColor,
  footerContent,
  className,
}) => {
  const sectionBackground =
    COLOR_CLASSES[sectionColor] ?? COLOR_CLASSES["gray-100"]

  return (
    <Card
      className={cn(
        "grid h-[16rem] w-[26rem] grid-rows-[2fr_1fr] overflow-hidden border-2 border-black bg-white p-0 shadow-none",
        className,
      )}
    >
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
  )
}
