import { cva } from 'class-variance-authority';

export const iconVariant = cva('', {
  variants: {
    size: {
      xxs: [],
      xs: [],
      sm: [],
      md: [],
      lg: [],
    },
    variant: {
      solid: [],
      outline: [],
      ghost: [],
    },
    colorScheme: {
      primary: [],
      gray: [],
      lavender: [],
      airForceBlue: [],
      blue: [],
      keppel: [],
      warning: [],
      error: [],
    },
  },
  compoundVariants: [
    // xxs size variants
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'primary',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'gray',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'lavender',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'airForceBlue',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'blue',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'keppel',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'warning',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'solid',
      colorScheme: 'error',
      className: ['w-3 h-3', 'text-white'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'primary',
      className: ['w-3 h-3', 'text-primary-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'gray',
      className: ['w-3 h-3', 'text-gray-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'lavender',
      className: ['w-3 h-3', 'text-lavender-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'airForceBlue',
      className: ['w-3 h-3', 'text-airForceBlue-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'blue',
      className: ['w-3 h-3', 'text-blue-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'keppel',
      className: ['w-3 h-3', 'text-keppel-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'warning',
      className: ['w-3 h-3', 'text-warning-600'],
    },
    {
      size: 'xxs',
      variant: 'outline',
      colorScheme: 'error',
      className: ['w-3 h-3', 'text-error-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'primary',
      className: ['w-3 h-3', 'text-primary-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'gray',
      className: ['w-3 h-3', 'text-gray-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'lavender',
      className: ['w-3 h-3', 'text-lavender-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'airForceBlue',
      className: ['w-3 h-3', 'text-airForceBlue-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'blue',
      className: ['w-3 h-3', 'text-blue-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'keppel',
      className: ['w-3 h-3', 'text-keppel-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'warning',
      className: ['w-3 h-3', 'text-warning-600'],
    },
    {
      size: 'xxs',
      variant: 'ghost',
      colorScheme: 'error',
      className: ['w-3 h-3', 'text-error-600'],
    },

    // Repeat the above pattern for 'xs', 'sm', 'md', and 'lg' sizes
    // xs size variants
    {
      size: 'xs',
      variant: 'solid',
      colorScheme: 'primary',
      className: ['w-4 h-4', 'text-white'],
    },
    // ... (repeat for all color schemes)

    // sm size variants
    {
      size: 'sm',
      variant: 'solid',
      colorScheme: 'primary',
      className: ['w-5 h-5', 'text-white'],
    },
    // ... (repeat for all color schemes)

    // md size variants
    {
      size: 'md',
      variant: 'solid',
      colorScheme: 'primary',
      className: ['w-5 h-5', 'text-white'],
    },
    // ... (repeat for all color schemes)

    // lg size variants
    {
      size: 'lg',
      variant: 'solid',
      colorScheme: 'primary',
      className: ['w-6 h-6', 'text-white'],
    },
    // ... (repeat for all color schemes)
  ],
});
