import * as React from "react"

import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card"

export interface EventSourceProps {
  title: string
  content: string
  sectionTone?: string
  badgeTone?: string
  badgeImageSrc?: string
  badgeImageAlt?: string
  badgeLabel?: string
  footerContent?: React.ReactNode
  className?: string
}

const DEFAULT_SECTION_TONE = "bg-gray-100"
const DEFAULT_BADGE_TONE = "bg-gray-950"

export const EventSource: React.FC<EventSourceProps> = ({
  title,
  content,
  sectionTone = DEFAULT_SECTION_TONE,
  badgeTone = DEFAULT_BADGE_TONE,
  badgeImageSrc,
  badgeImageAlt,
  badgeLabel,
  footerContent,
  className,
}) => {
  return (
    <div className={cn("relative h-72 w-[26rem]", className)}>
      <div
        className={cn(
          "absolute left-0 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black text-white",
          badgeTone,
        )}
      >
        {badgeImageSrc ? (
          <img
            src={badgeImageSrc}
            alt={badgeImageAlt ?? ""}
            className="h-9 w-9 object-contain"
            draggable={false}
          />
        ) : null}
        {badgeLabel ? <span className="sr-only">{badgeLabel}</span> : null}
      </div>
      <Card className="grid h-full w-full grid-rows-[2fr_1fr] overflow-hidden border-2 border-black bg-white p-0 shadow-none">
        <div className="grid h-full grid-rows-[auto_1fr]">
          <CardHeader
            className={cn(
              "justify-center space-y-2 rounded-none text-base text-neutral-900",
              sectionTone,
            )}
          >
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent
            className={cn(
              "h-full rounded-none p-6 text-sm leading-relaxed text-neutral-900",
              sectionTone,
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
