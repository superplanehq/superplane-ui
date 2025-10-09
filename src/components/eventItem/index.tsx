import * as React from "react"
import type { LucideProps } from "lucide-react"
import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge, type BadgeProps } from "../badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../item"

const STATUS_STYLES = {
  success: {
    background: "bg-emerald-50",
    text: "text-emerald-600",
    icon: "check-circle-2",
  },
  warning: {
    background: "bg-amber-50",
    text: "text-amber-600",
    icon: "alert-triangle",
  },
  error: {
    background: "bg-rose-50",
    text: "text-rose-600",
    icon: "x-circle",
  },
  info: {
    background: "bg-sky-50",
    text: "text-sky-600",
    icon: "info",
  },
} as const

type StatusKey = keyof typeof STATUS_STYLES

type IconComponent = React.ComponentType<LucideProps>

interface EventItemBadge extends Omit<BadgeProps, "variant"> {
  label: string
  icon?: string
  variant?: BadgeProps["variant"]
}

export interface EventItemProps {
  status: StatusKey
  title: string
  badges?: EventItemBadge[]
  href?: string
  timestamp?: React.ReactNode
  statusIcon?: string
  className?: string
}

const FALLBACK_ICON = "bell"

function resolveIcon(slug?: string, fallback: string = FALLBACK_ICON): IconComponent {
  const source = slug ?? fallback

  const pascal = source
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("")

  const candidate = (LucideIcons as Record<string, unknown>)[pascal]

  if (
    typeof candidate === "function" ||
    (typeof candidate === "object" && candidate && "render" in (candidate as object))
  ) {
    return candidate as IconComponent
  }

  const fallbackPascal = fallback
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("")

  const fallbackCandidate = (LucideIcons as Record<string, unknown>)[fallbackPascal]

  if (
    typeof fallbackCandidate === "function" ||
    (typeof fallbackCandidate === "object" &&
      fallbackCandidate &&
      "render" in (fallbackCandidate as object))
  ) {
    return fallbackCandidate as IconComponent
  }

  return LucideIcons.Circle
}

const EventItem: React.FC<EventItemProps> = ({
  status,
  title,
  badges,
  href,
  timestamp,
  statusIcon,
  className,
}) => {
  const statusConfig = STATUS_STYLES[status]
  const StatusIcon = resolveIcon(statusIcon, statusConfig.icon)

  const baseClassName = cn("transition-colors", statusConfig.background, className)

  const children = (
    <>
      <ItemMedia>
        <StatusIcon className={cn("size-5", statusConfig.text)} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="flex items-center gap-2 text-sm font-medium leading-snug">
          {badges?.length ? (
            <span className="flex gap-1">
              {badges.map(({ label, icon, variant, className: badgeClassName, ...badgeProps }) => {
                const BadgeIcon = icon ? resolveIcon(icon) : null

                return (
                  <Badge
                    key={label}
                    variant={variant ?? "outline"}
                    className={cn("flex items-center gap-1", badgeClassName)}
                    {...badgeProps}
                  >
                    {BadgeIcon ? <BadgeIcon className="size-3" /> : null}
                    {label}
                  </Badge>
                )
              })}
            </span>
          ) : null}
          <span>{title}</span>
        </ItemTitle>
      </ItemContent>
      {timestamp ? (
        <ItemActions>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </ItemActions>
      ) : null}
    </>
  )

  if (href) {
    return (
      <Item variant="outline" size="sm" className={baseClassName} asChild>
        <a href={href} className="flex items-stretch gap-2">
          {children}
        </a>
      </Item>
    )
  }

  return (
    <Item variant="outline" size="sm" className={baseClassName}>
      {children}
    </Item>
  )
}

export { EventItem }
