import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-16 w-full rounded-md px-3 py-2 text-base outline-none",
        "bg-[color:var(--input)] text-[color:var(--foreground)] border border-[color:var(--border)] shadow-sm",
        "focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] placeholder:text-[color:var(--muted)] disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
