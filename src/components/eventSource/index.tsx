import * as React from "react"

import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card"
import { Button } from "../button"
import { Badge } from "../badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../hoverCard"
import { BookMarked, Funnel } from "lucide-react"

export interface EventSourceProps {
  title: string
  content: string
  resource: {
    label: string
    href: string
  }
  eventType?: {
    label: string
    onClick?: () => void
  }
  filters?: string[]
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
  resource,
  eventType,
  filters,
  sectionTone = DEFAULT_SECTION_TONE,
  badgeTone = DEFAULT_BADGE_TONE,
  badgeImageSrc,
  badgeImageAlt,
  badgeLabel,
  footerContent,
  className,
}) => {
  return (
    <div className={cn("relative h-50 w-[26rem]", className)}>
      <div
        className={cn(
          "absolute left-0 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white",
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
      <Card className="grid h-full w-full grid-rows-[2fr_1fr] overflow-hidden border-[3px] border-black bg-white p-0 shadow-none">
        <div className="grid h-full grid-rows-[auto_1fr]">
          <CardHeader
            className={cn(
              "justify-center space-y-2 rounded-none pb-2 text-base text-neutral-900",
              sectionTone,
            )}
          >
            <CardTitle>{title}</CardTitle>
            <CardDescription className="pt-2 flex flex-col items-start gap-2 text-sm text-neutral-900">
              <Button variant="linkSubdued" className="justify-start" asChild>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <BookMarked />
                  {resource.label}
                </a>
              </Button>
              {(eventType || (filters && filters.length > 0)) && (
                <div className="flex items-center gap-2">
                  {eventType ? (
                    <Button
                      variant="linkSubdued"
                      className="justify-start"
                      onClick={eventType.onClick}
                    >
                      <Funnel />
                      {eventType.label}
                    </Button>
                  ) : null}
                  {filters && filters.length > 0 ? (
                    <HoverCard openDelay={150} closeDelay={150}>
                      <HoverCardTrigger asChild>
                        <Badge variant="default" className="cursor-pointer">
                          +{filters.length} filters
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-56 space-y-2 text-xs">
                        <p className="text-sm font-medium text-neutral-900">
                          Active filters
                        </p>
                        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                          {filters.map((filter) => (
                            <li key={filter}>{filter}</li>
                          ))}
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  ) : null}
                </div>
              )}
            </CardDescription>
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
