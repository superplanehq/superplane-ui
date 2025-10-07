import * as React from "react"
import ReactFlow, { Background, BackgroundVariant } from "reactflow"

import "reactflow/dist/style.css"

import { cn } from "@/lib/utils"

type ReactFlowCanvasProps = React.ComponentProps<typeof ReactFlow> & {
  containerClassName?: string
  containerStyle?: React.CSSProperties
}

const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = ({
  containerClassName,
  containerStyle,
  nodes,
  edges,
  fitView = true,
  children,
  ...props
}) => {
  const safeNodes = React.useMemo(() => nodes ?? [], [nodes])
  const safeEdges = React.useMemo(() => edges ?? [], [edges])

  return (
    <div
      className={cn("h-[480px] w-full overflow-hidden rounded-lg border", containerClassName)}
      style={containerStyle}
    >
      <ReactFlow nodes={safeNodes} edges={safeEdges} fitView={fitView} {...props}>
        {children}
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} />
      </ReactFlow>
    </div>
  )
}

export { ReactFlowCanvas }
