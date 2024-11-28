import React, { FC, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './button';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  colorScheme?: ButtonProps['colorScheme'];
}

export const ButtonGroup: FC<React.PropsWithChildren<ButtonGroupProps>> = ({
                                                                             children,
                                                                             className,
                                                                             variant = 'outline',
                                                                             size = 'sm',
                                                                             colorScheme = 'gray',
                                                                             ...props
                                                                           }) => {
  const childrenArray = React.Children.toArray(children) as ReactElement<ButtonProps>[];

  return (
    <div
      className={twMerge('inline-flex rounded-md shadow-sm', className)}
      role="group"
      {...props}
    >
      {React.Children.map(childrenArray, (child, index) => {
        if (React.isValidElement<ButtonProps>(child)) {
          return React.cloneElement(child, {
            variant,
            size,
            colorScheme,
            className: twMerge(
              child.props.className,
              'rounded-none focus:z-10',
              index === 0 ? 'rounded-l-md' : '',
              index === childrenArray.length - 1 ? 'rounded-r-md' : '',
              index !== 0 ? '-ml-px' : '',
            ),
          });
        }
        return child;
      })}
    </div>
  );
};
