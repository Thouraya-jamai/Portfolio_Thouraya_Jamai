import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Size = 'sm' | 'lg'

const sizes: Record<Size, string> = {
  sm: 'h-9 gap-2 px-4 text-sm',
  lg: 'h-12 gap-2 px-6 text-base',
}

export function LinkButton({
  size = 'lg',
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { size?: Size }) {
  return (
    <a
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [&_svg]:size-4 [&_svg]:shrink-0',
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
