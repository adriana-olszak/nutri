import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@nutri/client-utils"
import { inputBase, inputVariants, InputVariantProps } from "./Input.variants"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  success?: boolean;
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default'
  |'outline'
  |'filled'
  |'flushed'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant='default', size='sm', error, success, ...props }, ref) => {
    const state = error ? 'error' : success ? 'success' : undefined;

    return (
      <input
        type={type}
        className={cn(
          inputBase(),
          inputVariants({ variant, size, state, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
