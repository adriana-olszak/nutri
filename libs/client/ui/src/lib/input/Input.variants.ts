import { cva } from 'class-variance-authority';

export const inputBase = cva([
  'flex',
  'w-full',
  'rounded-md',
  'border',
  'bg-background',
  'px-3',
  'py-2',
  'text-sm',
  'ring-offset-background',
  'file:border-0',
  'file:bg-transparent',
  'file:text-sm',
  'file:font-medium',
  'placeholder:text-muted-foreground',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
]);

export const inputVariants = cva('', {
  variants: {
    variant: {
      default: [
        'border-input',
        'focus-visible:ring-ring',
      ],
      outline: [
        'border-gray-300',
        'focus-visible:border-primary-500',
        'focus-visible:ring-primary-500',
      ],
      filled: [
        'border-transparent',
        'bg-gray-100',
        'focus-visible:bg-background',
        'focus-visible:ring-primary-500',
      ],
      flushed: [
        'rounded-none',
        'border-x-0',
        'border-t-0',
        'border-b-1',
        'border-transparent',
        'px-0',
        'focus-visible:border-b-lavender-500',
        'focus-visible:ring-0',
      ],
    },
    size: {
      sm: ['h-8', 'text-xs', 'px-2'],
      md: ['h-10', 'text-sm', 'px-3'],
      lg: ['h-12', 'text-base', 'px-4'],
    },
    state: {
      error: [
        'border-error-500',
        'focus-visible:border-error-500',
        'focus-visible:ring-error-500',
      ],
      success: [
        'border-success-500',
        'focus-visible:border-success-500',
        'focus-visible:ring-success-500',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type InputVariantProps = Parameters<typeof inputVariants>[0];
