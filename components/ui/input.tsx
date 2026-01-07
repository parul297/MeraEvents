import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-md border bg-[color:var(--input)] px-3 py-2 text-base text-[color:var(--foreground)] shadow-sm transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
        "placeholder:text-[color:var(--muted)] disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

export { Input }
